from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from .models import Comment
from blog.models import BlogPost

# Create your views here.

# Adding New Comments/Replies

def add_comment(request, post_id):
    if request.method == 'POST':
        content = request.POST.get('content')
        parent_id = request.POST.get('parent_id', None)
        post = get_object_or_404(BlogPost, id=post_id)

        if parent_id:
            parent = Comment.objects.get(id=parent_id)
            comment = Comment.objects.create(user=request.user, post=post, content=content, parent=parent)
        else:
            comment = Comment.objects.create(user=request.user, post=post, content=content,)
    
    return JsonResponse({'success': True, 'message': 'Comment added', 'comment_id': comment_id})

# Like/Unlike a Comment

def like_comment(request):
    if request.method == 'POST':
        comment_id = request.POST.get('comment_id')
        comment = get_object_or_404(Comment, id=comment_id)
        if request.user in comment.likes.all():
            comment.likes.remove(request.user)
            liked = False
        else:
            comment.likes.add(request.user)
            liked = True
        return JsonResponse({'success': True, 'liked': liked, 'likes_count': comment.likes.count()})
