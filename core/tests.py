from django.test import TestCase
from django.urls import reverse

# Create your tests here.


class CoreViewsTests(TestCase):

    def test_home_page_uses_correct_template(self):
        response = self.client.get(reverse('home'))
        self.assertTemplateUsed(response, 'home.html')
        self.assertEqual(response.status_code, 200)

    def test_about_page_uses_correct_template(self):
        response = self.client.get(reverse('about'))
        self.assertTemplateUsed(response, 'about.html')
        self.assertEqual(response.status_code, 200)

    def test_contact_page_uses_correct_template(self):
        response = self.client.get(reverse('contact'))
        self.assertTemplateUsed(response, 'contact.html')
        self.assertEqual(response.status_code, 200)
