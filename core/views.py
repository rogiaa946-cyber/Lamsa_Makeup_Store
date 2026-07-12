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

def add_to_cart(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    cart_id = request.session.get('cart_id')
    cart, created = Cart.objects.get_or_create(id=cart_id)
    if created:
        request.session['cart_id'] = cart.id
        
    cart_item, item_created = CartItem.objects.get_or_create(cart=cart, product=product)
    if not item_created:
        cart_item.quantity += 1
        cart_item.save()
        
    return redirect('home')

def cart_detail(request):
    cart_id = request.session.get('cart_id')
    cart, created = Cart.objects.get_or_create(id=cart_id)
    if created:
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
    