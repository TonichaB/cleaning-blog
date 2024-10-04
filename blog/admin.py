from django.contrib import admin
from .models import BlogPost


# Register your models here.
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'published_date', 'likes')
    list_filter = ('author', 'published_date')
    search_fields = ('title', 'content')


admin.site.register(BlogPost, BlogPostAdmin)
