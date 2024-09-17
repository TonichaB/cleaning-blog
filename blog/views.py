from django.shortcuts import render
from django.http import HttpResponse
from .models import BlogPost

# Create your views here.

def blog(request):
    return render(request, 'blog.html')

def top_posts(request):
    popular_posts = BlogPost.objects.order_by('-likes')[:5]
    return render(request, 'core/home.html', {'popular_posts': popular_posts})