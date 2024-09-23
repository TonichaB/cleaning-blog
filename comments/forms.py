from django import forms
from .models import Comment
from django_summernote.widgets import SummernoteWidget

# Comments Form

class CommentForm(forms.Modelform):
    class Meta:
        model = Comment
        fields = ['content']
        widgets = {
            'content': SummernoteWidget(),
        }
