from django.shortcuts import render , redirect
from .models import *
from django.urls import reverse
from django.db.models import Q

def home(request):
    return render(request , 'none/pages/home.html' )

def aboutus(request):
    return render(request , 'none/pages/aboutus.html' )

def booklist(request):
    allbooks = Book.objects.all()
    return render(request , 'none/pages/booklist.html' , {'book' : allbooks} )

def login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        try:
            person = Person.objects.get(Username=username, password=password)
        except Person.DoesNotExist:
            person = None

        if person is not None:
            if(person.isAdmin == True):
                return redirect('adminhome')
            else:
                redirect_url = reverse('userhome', kwargs={'person_id': person.id})
                return redirect(redirect_url)
        else:
            return render(request, 'none/pages/login.html', {'error_message': 'Invalid username or password'})
    else:
        return render(request, 'none/pages/login.html')

def signup(request):
    if request.method == 'POST':
        username = request.POST.get("username")
        password = request.POST.get("password")
        email = request.POST.get("email")
        type = request.POST.get("user_type")
        data = Person(Username = username , email = email , password = password , 
                      isAdmin = True if type == 'admin' else False)
        data.save()
        return redirect('login')
    return render(request , 'none/pages/signup.html' )




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
        allbooks = Book.objects.filter(
            Q(bookname__icontains=query) | 
            Q(Author__icontains=query) | 
            Q(category__icontains=query)
        ).distinct()
    else:
        allbooks = Book.objects.all()
    return render(request, 'none/pages/booklist.html', {'book': allbooks})

