from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404 
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from .models import Product, Category, Cart, CartItem, Order, OrderItem
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from .models import Cart, CartItem

def home(request):
    category_id = request.GET.get('category')
    search = request.GET.get('search')

    products = Product.objects.all()

    if category_id:
        products = products.filter(category_id=category_id)

    if search:
        products = products.filter(name__icontains=search)

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
    
    
    cart_id = request.session.get('cart_id')
    if cart_id:
        cart, _ = Cart.objects.get_or_create(id=cart_id)
    else:
        cart = Cart.objects.create()
        request.session['cart_id'] = cart.id

    cart_item, item_created = CartItem.objects.get_or_create(
        cart=cart, 
        product=product,
        defaults={'quantity': 1}
    )
    
    
    if not item_created:
        if cart_item.quantity < product.stock:
            cart_item.quantity += 1
            cart_item.save()
        else:
            if request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({
                    'status': 'error', 
                    'message': f'Stock limit reached for {product.name}'
                }, status=400)
            messages.warning(request, f"الكمية المطلوبة غير متوفرة في المخزون لـ {product.name}")
            return redirect('home')

    
    total_items = cart.items.count()

    
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({
            'status': 'success',
            'cart_count': total_items,
            'message': f'Added {product.name} to cart!'
        })

    
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

def update_cart_quantity(request, item_id, action):
    item = get_object_or_404(CartItem, id=item_id)
    cart = item.cart

    if action == 'increase':
        item.quantity += 1
        item.save()
    elif action == 'decrease':
        if item.quantity > 1:
            item.quantity -= 1
            item.save()
        else:
            item.delete()
            if request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({
                    'status': 'success',
                    'action': 'delete',
                    'item_id': item_id,
                    'total_price': cart.get_total_price(),
                    'cart_count': cart.items.count()
                })

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({
            'status': 'success',
            'action': action,
            'item_id': item_id,
            'quantity': item.quantity,
            'total_price': cart.get_total_price(),
            'cart_count': cart.items.count()
        })

    return redirect('cart_detail')


def remove_from_cart(request, item_id):
    item = get_object_or_404(CartItem, id=item_id)
    cart = item.cart
    item.delete()

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({
            'status': 'success',
            'action': 'delete',
            'item_id': item_id,
            'total_price': cart.get_total_price(),
            'cart_count': cart.items.count()
        })

    return redirect('cart_detail')
def search_products(request):
    query = request.GET.get('q', '')

    products = Product.objects.filter(name__icontains=query)

    data = []

    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': str(product.price),
            'description': product.description,
            'image': product.image_url,
        })

    return JsonResponse(data, safe=False)    
