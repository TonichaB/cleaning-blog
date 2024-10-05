from django.test import TestCase
from django.urls import reverse
from .models import Comment
from blog.models import BlogPost
from django.contrib.auth.models import User
from django.utils import timezone

# Create your tests here.


class CommentsViewTests(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='password')
        self.client.login(username='testuser', password='password')
        self.blog_post = BlogPost.objects.create(
            title='Test Post',
            content='Content',
            author=self.user,
            published_date=timezone.now()
        )

    def test_comments_view_users_correct_template(self):
        response = self.client.get(reverse('load_comments', args=[self.blog_post.id]))
        self.assertEqual(response.status_code, 200)

    def test_create_comment(self):
        response = self.client.post(reverse('add_comment', args=[self.blog_post.id]), {
            'content': 'This is a test comment.',
        })
        self.assertEqual(response.status_code, 200)
        self.assertTrue(Comment.objects.filter(content='This is a test comment.').exists())