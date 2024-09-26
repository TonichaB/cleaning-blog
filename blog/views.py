from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_GET, require_POST, require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
import json
from .models import BlogPost, Like

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
        blog_posts = blog_posts.filter(author__username__contains=author)

    if sort == 'published_date_desc':
        blog_posts = blog_posts.order_by('-published_date')
    elif sort == 'published_date_asc':
        blog_posts = blog_posts.order_by('published_date')
    elif sort == 'popularity_desc':
        blog_posts = blog_posts.order_by('-likes')
    elif sort == 'popularity_asc':
        blog_posts = blog_posts.order_by('likes')

    # Get the likes for the current user
    liked_posts = []
    print(liked_posts)
    if request.user.is_authenticated:
        liked_posts = Like.objects.filter(user=request.user).values_list('blog_post_id', flat=True)

    # Pagination
    paginator = Paginator(blog_posts, 5)
    page = request.GET.get('page')

    try:
        blog_posts = paginator.page(page)
    except PageNotAnInteger:
        blog_posts = paginator.page(1)
    except EmptyPage:
        blog_posts = paginator.page(paginator.num_pages)

    context = {
        'blog_posts': blog_posts,
        'is_authenticated': request.user.is_authenticated,
        'liked_posts': liked_posts
    }

    return render(request, 'blog.html', context)

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
            'content': post.content,
            'likes': post.likes,
        }
        for post in popular_posts
    ]
    print(data)
    return JsonResponse({'popular_posts': data})

# Display My Posts
@login_required
def my_posts(request):
    posts = BlogPost.objects.filter(author=request.user)
    return render(request, 'my_posts.html', {'posts': posts})

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
    elif request.method == 'GET':
        try:
            post = BlogPost.objects.get(id=post_id, author=request.user)
            data = {
                'id': post.id,
                'title': post.title,
                'content': post.content
            }
            return JsonResponse({'success': True, 'post': data})
        except BlogPost.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Post not found'})
            
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

# Create Blog Post
@login_required
def create_post_view(request):
    if request.method == 'POST':
        title = request.POST['title']
        content = request.POST['content']
        category = request.POST.get('category', 'No Category')
        user = request.user

        post = BlogPost.objects.create(
            author=request.user,
            title=title,
            content=content,
            category=category,
            published_date=timezone.now(),
        )

        return JsonResponse({'success': True, 'message': 'Post Successfully Published!'})

    return JsonResponse({'success': False, 'message': 'Invalid Request'})

# Edit Blog Post
@login_required
@require_http_methods(["PUT"])
def edit_post(request, post_id):
    post = BlogPost.objects.get(id=post_id)
    if request.user == post.author:
        data = json.loads(request.body)
        post.title = data.get('title', post.title)
        post.content = data.get('content', post.content)
        post.category = data.get('category', post.category)

        if post.title and post.content:
            post.save()
            return JsonResponse({'success': True, 'message': 'Post Updated Successfully'})
        else:
            return JsonResponse({'success': False, 'message': 'Title and Content are required.'})
    else:
        return JsonResponse({'success': False, 'message': 'Unauthorised'})

# Delete Blog Post

def delete_post(request, pk):
    post = get_object_or_404(BlogPost, pk=pk, author=request.user)
    post.delete()
    return JsonResponse({'success': True, 'message': 'Post Deleted Successfully'})

# Like Posts
@login_required
def like_post(request):
    if request.method == 'POST':
        post_id = request.POST.get('post_id')
        user = request.user

        try:
            post = BlogPost.objects.get(id=post_id)
        except BlogPost.DoesNotExist:
            return JsonResponse({'error': 'Post not found'}, status=404)
        
        like, created = Like.objects.get_or_create(user=user, blog_post=post)

        if not created:
            like.delete()
            post.likes -= 1
            liked = False
        else:
            post.likes += 1
            liked = True
        
        post.save()
        
        return JsonResponse({'status': 'success', 'likes': post.likes, 'liked': liked})
    
    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)