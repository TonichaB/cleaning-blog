from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def my_users(request):
    return HttpResponse("Hello World 4")