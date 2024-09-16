from django.test import TestCase
from django.urls import reverse

# Create your tests here.

class SimpleViewTests(TestCase):
    def test_comments_view(self):
        # Make a GET request to the blog view
        response = self.client.get(reverse('comments'))

        # Check if the view returns a 200 OK status
        self.assertEqual(response.status_code, 200)

        # Check if the response contains the expected text
        self.assertContains(response, "Hello World 3")