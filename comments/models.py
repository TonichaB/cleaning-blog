from django.db import models
from django.contrib.auth.models import User
from blog.models import BlogPost

# Create your models here.


# Comments Model
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        BlogPost, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    parent = models.ForeignKey(
        'self', null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name='replies'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    likes = models.ManyToManyField(
        User,
        related_name='comment_likes',
        blank=True
    )

    def __str__(self):
        return f"Comment by {self.user.username} on {self.post.title}"
