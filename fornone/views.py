from django.shortcuts import render , redirect
from .models import *
from django.urls import reverse
from django.db.models import Q
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
from django.views.generic import ListView
from django.db.models import Q
from datetime import date, datetime

from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password
from .models import Person

def home(request):
    return render(request , 'none/pages/home.html' )

def aboutus(request):
    return render(request , 'none/pages/aboutus.html' )

def booklist(request):
    allbooks = Book.objects.all()
    return render(request , 'none/pages/booklist.html' , {'book' : allbooks} )



def login(request):
    if request.method == "POST":
        username = request.POST.get("username", "").strip()
        password = request.POST.get("password", "").strip()
        
        try:
            person = Person.objects.get(Username=username, password=password)
        except Person.DoesNotExist:
            person = None

        if person is not None:
            if person.isAdmin:
                redirect_url = reverse('adminhome')
                return JsonResponse({'status': 'success', 'redirect_url': redirect_url, 'username': person.Username})
            else:
                redirect_url = reverse('userhome', kwargs={'person_id': person.id})
                return JsonResponse({'status': 'success', 'redirect_url': redirect_url, 'username': person.Username})
        else:
            return JsonResponse({'status': 'fail', 'message': 'Invalid username or password'})
    else:
        return render(request, 'none/pages/login.html')


def signup(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        password2 = request.POST.get("password2")
        email = request.POST.get("email")
        is_admin = request.POST.get("is_admin") == 'on'

        allusers = Person.objects.all()
        valid = True
        message = ""
        for x in allusers:
            if email == x.email:
                valid = False
                message = "the email is already used"
            if username == x.Username:
                valid = False
                message = "the Username is already used"
            if len(username) < 4:
                valid = False
                message = "the Username is too short .. min 4 char"
            if len(password) < 4:
                valid = False
                message = "the Password is too short and weak .. min 4 char"  
            if password2 != password:
                valid = False
                message = "the password did not match make sure of it"
            
            
        if valid:
            person = Person(Username=username, password=password, email=email, isAdmin=is_admin)
            person.save()
            url = reverse('login')
            return JsonResponse({'message':'success' , 'url':url})  
        else:
            url = reverse('signup')
            return JsonResponse({'message':message , 'url':url})  

    return render(request, 'none/pages/signup.html')





def bookdetails(request , book_id):
    book = Book.objects.get(id = book_id)
    return render(request , 'none/pages/bookdetails.html' , {'book' : book})


def contactus(request):
    if request.method=="POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        number = request.POST.get('number')
        paragraph = request.POST.get('paragraph')
        data = contact(name = name, email = email, number = number, paragraph = paragraph)
        data.save()


    return render(request , 'base/contactus.html')

def booklist(request):
    query = request.GET.get('q')
    if query:
        books = Book.objects.filter(
            Q(bookname__icontains=query) 
            # Q(author__icontains=query) |
            # Q(category__icontains=query)
        ).distinct()
    else:
        books = Book.objects.all()

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        data = []
        for book in books:
            data.append({
                'id': book.id,
                'bookname': book.bookname,
                'image_url': book.image.url,  
            })
        return JsonResponse(data, safe=False)
    else:
        return render(request, 'none/pages/booklist.html', {'book': books})


    

