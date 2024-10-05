from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User

# Create your tests here.


class SimpleViewTests(TestCase):

    def setUp(self):
        self.user_data = {
            'username': 'testuser',
            'password': 'password123',
            'email': 'testuser@example.com',
        }

    def test_user_registration(self):
        response = self.client.post(reverse('register'), {
            'username': self.user_data['username'],
            'password1': self.user_data['password'],
            'password2': self.user_data['password'],
            'email': self.user_data['email'],
        })
        self.assertEqual(response.status_code, 200)
        self.assertTrue(User.objects.filter(username=self.user_data['username']).exists())

    def test_user_login(self):
        self.client.post(reverse('register'), {
            'username': self.user_data['username'],
            'password1': self.user_data['password'],
            'password2': self.user_data['password'],
            'email': self.user_data['email'],
        })

        response = self.client.post(reverse('login'), {
            'username': self.user_data['username'],
            'password': self.user_data['password'],
        })
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.wsgi_request.user.is_authenticated)
    
    def test_user_logout(self):
        self.client.post(reverse('register'), {
            'username': self.user_data['username'],
            'password1': self.user_data['password'],
            'password2': self.user_data['password'],
            'email': self.user_data['email'],
        })
        self.client.login(username=self.user_data['username'], password=self.user_data['password'])

        response = self.client.post(reverse('logout'))
        self.assertEqual(response.status_code, 200)
        self.assertFalse(response.wsgi_request.user.is_authenticated)

