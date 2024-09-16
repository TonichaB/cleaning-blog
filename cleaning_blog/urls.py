"""
URL configuration for cleaning_blog project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core.views import my_core
from blog.views import my_blog
from comments.views import my_comments
from users.views import my_users

urlpatterns = [
    path('admin/', admin.site.urls),
    path('core/', my_core, name='core'),
    path('blog/', my_blog, name='blog'),
    path('comments/', my_comments, name='comments'),
    path('users/', my_users, name='users'),
]
