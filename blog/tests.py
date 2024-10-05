from django.test import TestCase
from django.urls import reverse
from .models import BlogPost
from django.contrib.auth.models import User
from django.utils import timezone


# Create your tests here.
class BlogViewsTests(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            password='password'
        )
        self.blog_post = BlogPost.objects.create(
            title='Test Blog Post',
            content='This is a test blog post content.',
            author=self.user,
            category='Product Review',
            published_date=timezone.now()
        )

    def test_blog_page_uses_correct_template(self):
        response = self.client.get(reverse('blog'))
        self.assertTemplateUsed(response, 'blog.html')
        self.assertEqual(response.status_code, 200)

    def test_blog_post_displayed_on_page(self):
        response = self.client.get(reverse('blog'))
        self.assertContains(response, 'Test Blog Post')
        self.assertContains(response, 'This is a test blog post content.')

    def test_create_blog_post(self):
        self.client.login(username='testuser', password='password')

        response = self.client.post(reverse('create_post'), {
            'title': 'New Blog Post',
            'content': 'This is a new blog post content.',
            'category': 'Tips and Tricks',
        })

        self.assertEqual(response.status_code, 200)
        self.assertTrue(BlogPost.objects.filter(
            title='New Blog Post'
        ).exists())

    def test_no_blog_posts_displayed(self):
        BlogPost.objects.all().delete()
        response = self.client.get(reverse('blog'))
        self.assertContains(response, 'No Blog Posts Available')

    def test_filtering_by_category(self):
        response = self.client.get(
            reverse('blog') + '?category=Product Review'
        )
        self.assertContains(response, 'Test Blog Post')
        self.assertNotContains(response, 'Other Blog Post')
