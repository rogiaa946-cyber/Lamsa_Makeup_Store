from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def str(self): # <-- هنا
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.CharField(max_length=500, blank=True, null=True)
    stock = models.IntegerField(default=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def str(self): # <-- هنا
        return self.name

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def str(self): # <-- هنا
        return f"Cart {self.id}"

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def str(self): # <-- هنا
        return f"{self.quantity} x {self.product.name}"

class Order(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    address = models.TextField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def str(self): # <-- هنا
        return f"Order {self.id} by {self.name}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def str(self): # <-- هنا
        return f"{self.quantity} x {self.product.name}"