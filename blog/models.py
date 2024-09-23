from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User
from django_summernote.fields import SummernoteTextField

# Create your models here.

# Blog Posts Model

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = SummernoteTextField()
    published_date = models.DateTimeField(null=False)
    likes = models.PositiveIntegerField(default=0) # Field to Track Likes
    author = models.ForeignKey(User, on_delete=models.CASCADE) 

    def get_absolute_url(self):
        return reverse('user_post_detail', kwargs={'post_id': self.id})

    def __str__(self):
        return self.title

# Likes Model

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    blog_post = models.ForeignKey(BlogPost, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'blog_post')
