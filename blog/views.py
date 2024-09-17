from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import BlogPost

# Create your views here.

# Show blog.html content
def blog(request):
    return render(request, 'blog.html')

# Obtain the initial top 5 popular posts
def top_posts(request):
    popular_posts = BlogPost.objects.order_by('-likes')[:5]
    return render(request, 'core/home.html', {'popular_posts': popular_posts})

# Fetch the latest popular posts
def get_popular_posts(request):
    popular_posts = BlogPost.objects.order_by('-likes')[:5]
    data = [
        {
            'title': post.title,
            'url': post.get_absolute_url(),
            'author': post.author.username,
            'excerpt': post.content[:200],
        }
        for post in popular_posts
    ]
    return JsonResponse({'popular_posts': data})
