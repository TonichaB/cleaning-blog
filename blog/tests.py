from django.test import TestCase
from django.urls import reverse

# Create your tests here.

class BlogViewsTests(TestCase):
    def test_blog_page_uses_correct_template(self):
        response = self.client.get(reverse('blog'))
        self.assertTemplateUsed(response, 'blog.html')