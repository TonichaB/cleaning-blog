from django import forms
from .models import BlogPost
from django_summernote.widgets import SummernoteWidget

# Blog Posts Form

class BlogPostForm (forms.ModelForm):
    class Meta:
        model = BlogPost
        fields = ['title', 'catagory', 'content' 'tags']
        widgets = {
            'content': SummernoteWidget(),
        }