from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.http import JsonResponse


# Create your views here.

# Registration
def register_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        if password1 != password2:
            return JsonResponse(
                {'success': False, 'message': 'Passwords do not match.'}
            )

        if User.objects.filter(username=username).exists():
            return JsonResponse(
                {'success': False, 'message': 'Username already exists.'}
            )

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password1
        )

        user.save()
        login(request, user)
        return JsonResponse(
            {'success': True, 'message': 'Registration Successful'}
        )

    return JsonResponse({'success': False, 'message': 'Invalid Request.'})


# User Login
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse(
                {'success': False, 'message': 'Invalid username or password.'}
            )

    return JsonResponse({'success': False, 'message': 'Invalid Request'})


# User Logout
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'success': True})
        return redirect('/')

    return JsonResponse({'success': False, 'message': 'Invalid Request.'})
