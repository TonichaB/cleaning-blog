from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_GET, require_POST
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

# API to fetch user-specific posts
@login_required
@require_GET
def user_posts_api(request):
    posts = BlogPost.objects.filter(author=request.user)
    data = [
        {
            'id': post.id,
            'title': post.title,
            'excerpt': post.content[:200],
            'url': post.get_absolute_url(),
        }
        for post in posts
    ]
    return JsonResponse(data, safe=False)

# API to handle post deletions
@login_required
def user_post_detail(request, post_id):
    if request.method == 'DELETE':
        try:
            post = BlogPost.objects.get(id=post_id, author=request.user)
        except BlogPost.DoesNotExist:
            return HttpResponseForbidden('You do not have permission to delete this post.')

        post.delete()
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)