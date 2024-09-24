from django.contrib import admin
from .models import Comment

# Register your models here.

class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'post', 'content', 'created_at')
    search_fields = ('user__username', 'content', 'post__title')
    list_filter = ('created_at', 'user')

admin.site.register(Comment, CommentAdmin)