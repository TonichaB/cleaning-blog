from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from .models import Comment
from blog.models import BlogPost

# Create your views here.

# Load the Comments Section
def load_comments(request, post_id):
    post = get_object_or_404(BlogPost, id=post_id)
    comments = post.comments.all().order_by('created_at')

    # Arrange the Comments
    comments_data = []
    for comment in comments:
        comments_data.append({
            'author': comment.author.username,
            'content': comment.content,
            'created_at': comment.created_at.strftime('%Y-%m-%d %H: %M: %S'),
            'likes_count': comment.likes.count(),
            'is_liked': comment.likes.filter(id=request.user.id).exists() if request.user.is_authenticated else False,
            'comment_id': comment.id,
            'replies': [
                {
                    'author': reply.author.username,
                    'content': reply.content,
                    'created_at': reply.created_at.strftime('%Y-%m-%d %H: %M: %S'),
                }
                for reply in comment.replies.all()
            ]
        })
    return JsonResponse({'comments': comments_data})

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

# Edit Comment
def edit_comment(request, comment_id):
    if request.method == 'POST':
        content = request.POST.get('content')
        comment = get_object_or_404(Comment, id=comment_id, user=request.user)
        comment.content = content
        comment.save()
        return JsonResponse({'success': True, 'message': 'Comment Updated'})

# Delete Comment
def delete_comment(request, comment_id):
    if request.method == 'POST':
        comment = get_object_or_404(Comment, id=comment_id, user=request.user)
        comment.delete()
        return JsonResponse({'success': True, 'message': 'Comment Deleted'})