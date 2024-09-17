from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import BlogPost

# Create your views here.

# Show blog.html content
def blog(request):
    category = request.GET.get('category')
    author = request.GET.get('author')
    sort = request.GET.get('sort')

    blog_posts = BlogPost.objects.all()

    # Blog Post display Filtering/Sorting options
    if category:
        blog_posts = blog_posts.filter(category=category)
    if author:
        blog_posts = blog_posts.filter(author__username__icontains=author)

    if sort == 'published_date_desc':
        blog_posts = blog_posts.order_by('-published_date')
    elif sort == 'published_date_asc':
        blog_posts = blog_posts.order_by('published_date')
    elif sort == 'popularity_desc':
        blog_posts = blog_posts.order_by('-likes')
    elif sort == 'popularity_asc':
        blog_posts = blog_posts.order_by('likes')

    # Pagination
    paginator = Paginator(blog_posts, 5)
    page = request.GET.get('page')

    try:
        blog_posts = paginator.page(page)
    except PageNotAnInteger:
        blog_posts = paginator.page(1)
    except EmptyPage:
        blog_posts = paginator.page(paginator.num_pages)
        
    return render(request, 'blog.html', {'blog_posts': blog_posts})

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
