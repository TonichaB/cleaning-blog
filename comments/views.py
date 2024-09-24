from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from .models import Comment
from blog.models import BlogPost
from django.contrib.auth.decorators import login_required

# Create your views here.

# Load the Comments Section
def load_comments(request, post_id):
    post = get_object_or_404(BlogPost, id=post_id)
    comments = post.comments.all().order_by('created_at')

    # Arrange the Comments
    comments_data = []
    for comment in comments:
        comments_data.append({
            'author': comment.user.username,
            'content': comment.content,
            'created_at': comment.created_at.strftime('%Y-%m-%d %H: %M: %S'),
            'comment_id': comment.id,
        })
    return JsonResponse({'comments': comments_data}, status=200)

# Adding New Comments/Replies
@login_required
def add_comment(request, post_id):
    if request.method == 'POST':
        content = request.POST.get('content')
        post = get_object_or_404(BlogPost, id=post_id)

        Comment.objects.create(user=request.user, post=post, content=content)

        return JsonResponse({'success': True, 'message': 'Comment added'})
    
    return JsonResponse({'success': False, 'message': 'Invalid request'}, status=400)