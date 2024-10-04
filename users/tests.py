from django.test import TestCase
from django.urls import reverse

# Create your tests here.


class SimpleViewTests(TestCase):
    def test_users_view(self):
        # Make a GET request to the user view
        response = self.client.get(reverse('users'))

        # Check if the view returns a 200 OK status
        self.assertEqual(response.status_code, 200)

        # Check if the response contains the expected text
        self.assertContains(response, "Hello World 4")
