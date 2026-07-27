from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404 
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from .models import Product, Category, Cart, CartItem, Order, OrderItem

def home(request):
    category_id = request.GET.get('category')
    if category_id:
        products = Product.objects.filter(category_id=category_id)
    else:
        products = Product.objects.all()
        
    categories = Category.objects.all()
    
    cart_id = request.session.get('cart_id')
    cart, created = Cart.objects.get_or_create(id=cart_id)
    if created:
        request.session['cart_id'] = cart.id
        
    return render(request, 'core/home.html', {
        'products': products,
        'categories': categories,
        'selected_category': category_id,
        'cart': cart
    })

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Product, Cart, CartItem

def add_to_cart(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    
    # جلب السلة أو إنشاؤها وتثبيتها في الـ Session
    cart_id = request.session.get('cart_id')
    if cart_id:
        cart, _ = Cart.objects.get_or_create(id=cart_id)
    else:
        cart = Cart.objects.create()
        request.session['cart_id'] = cart.id

    # البحث عن المنتج في السلة أو إضافة عنصر جديد
    cart_item, item_created = CartItem.objects.get_or_create(
        cart=cart, 
        product=product,
        defaults={'quantity': 1}
    )
    
    # إذا كان المنتج موجوداً سابقاً -> زيادة الكمية بمقدار 1
    if not item_created:
        if cart_item.quantity < product.stock:
            cart_item.quantity += 1
            cart_item.save()
        else:
            messages.warning(request, f"الكمية المطلوبة غير متوفرة في المخزون لـ {product.name}")
            return redirect('home')
            
    return redirect('home')


def cart_detail(request):
    cart_id = request.session.get('cart_id')
    if cart_id:
        cart, _ = Cart.objects.get_or_create(id=cart_id)
    else:
        cart = Cart.objects.create()
        request.session['cart_id'] = cart.id
        
    total_price = sum(item.product.price * item.quantity for item in cart.items.all())
    
    return render(request, 'core/cart.html', {
        'cart': cart,
        'total_price': total_price
    })

def checkout(request):
    cart_id = request.session.get('cart_id')
    cart = get_object_or_404(Cart, id=cart_id)
    
    if not cart.items.exists():
        return redirect('home')
        
    total_price = sum(item.product.price * item.quantity for item in cart.items.all())
    
    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        address = request.POST.get('address')
        
        order = Order.objects.create(
            name=name,
            phone=phone,
            address=address,
            total_price=total_price
        )
        
        for item in cart.items.all():
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price
            )
            
        cart.items.all().delete()
        return render(request, 'core/success.html')
        
    return render(request, 'core/checkout.html', {
        'cart': cart,
        'total_price': total_price
    })

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(
            request,
            username=username,
            password=password
        )

        if user is not None:
            login(request, user)
            return redirect('home')

    return render(request, 'core/login.html')

def register_view(request):
    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '')

        if not username or not email or not password:
            messages.error(request, "يرجى ملء جميع الحقول.")
            return render(request, 'core/register.html')

        if User.objects.filter(username=username).exists():
            messages.error(request, "اسم المستخدم مستخدم بالفعل.")
            return render(request, 'core/register.html')

        User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        messages.success(request, "تم إنشاء الحساب بنجاح، يمكنك الآن تسجيل الدخول.")
        return redirect('login')

    return render(request, 'core/register.html')
def logout_view(request):
      logout(request)
      return redirect('home')
def remove_from_cart(request, item_id):
    """دالة لحذف المنتج نهائياً من السلة"""
    cart_item = get_object_or_404(CartItem, id=item_id)
    cart_item.delete()
    return redirect('cart_detail')

def update_cart_quantity(request, item_id, action):
    """دالة لزيادة أو إنقاص الكمية بضغطة زر (+ / -)"""
    cart_item = get_object_or_404(CartItem, id=item_id)
    
    if action == 'increase':
        if cart_item.quantity < cart_item.product.stock:
            cart_item.quantity += 1
            cart_item.save()
    elif action == 'decrease':
        if cart_item.quantity > 1:
            cart_item.quantity -= 1
            cart_item.save()
        else:
            # لو الكمية وصلت 1 وضغط ناقص، يتم حذف المنتج من السلة
            cart_item.delete()
            
    return redirect('cart_detail')
    