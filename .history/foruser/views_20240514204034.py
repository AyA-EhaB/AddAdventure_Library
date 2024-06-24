from django.shortcuts import render,get_object_or_404,redirect
from bookdata.models import *
from fornone.models import *
from django.urls import reverse
from django.db.models import Q


def home(request , person_id):
    id = person_id
    return render(request , 'user/home.html' , {'personid' : id})


def availableBooks(request, person_id):
    id = person_id
    person = Person.objects.get(id = person_id)
    available_books=[]
    allbooks = Book.objects.all() 
    personbooks = person.books.all()
    for x in allbooks:
        if x not in personbooks and x.noofcopies > 0 and x.available:
            available_books.append(x)
    print(available_books)
    return render(request, 'user/availableBooks.html', {'all_avilablebooks': available_books ,"personid" : id ,"all_books" :allbooks })


def borrow_book(request, book_id , person_id):
    if request.method == 'POST':
        person = Person.objects.get(id = person_id)
        book = Book.objects.get(id = book_id)
        person.books.add(book) 
        book.noofcopies = book.noofcopies - 1
        if book.noofcopies == 0:
            book.available = False
        print(person.books)
        print(book.noofcopies)
        book.save()
        person.save()
        redirect_url = reverse('availableBooks', kwargs={'person_id': person.id})
        return redirect(redirect_url)



def borrowedBooks(request, person_id):
    id = person_id
    person = Person.objects.get(id = person_id)
    borrowed_books = person.books.all()
    return render(request, 'user/borrowedBooks.html', {'borrowed_books': borrowed_books , "personid" : id})


def return_book(request , book_id , person_id):
    if request.method == 'POST':
        person = Person.objects.get(id = person_id)
        book = Book.objects.get(id = book_id)
        person.books.remove(book)
        book.noofcopies = book.noofcopies + 1
        if(book.available == False):
            book.available = True
        print(book.noofcopies)
        book.save()
        person.save()
        redirect_url = reverse('availableBooks', kwargs={'person_id': person.id})
        return redirect(redirect_url)

def bookdetails(request , book_id ,person_id):
    bookdata = Book.objects.get(id = book_id)
    person = Person.objects.get(id = person_id)
    personbooks= person.books.all()
    return render(request , 'user/bookdetails.html' , {'book' : bookdata , 'personid' : person_id , 'personbooks' : personbooks})



def contactus(request , person_id):
    if request.method=="POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        number = request.POST.get('number')
        paragraph = request.POST.get('paragraph')
        data = contact(name = name, email = email, number = number, paragraph = paragraph)
        data.save()


    return render(request , 'user/contactus.html' ,{'personid' : person_id})

def booklist(request , person_id):
    query = request.GET.get('q')
    available_books=[]
    if query:
        allbooks = Book.objects.filter(
            Q(bookname__icontains=query) | 
            Q(Author__icontains=query) | 
            Q(category__icontains=query)
        ).distinct()
        person = Person.objects.get(id = person_id)
        personbooks = person.books.all()
        
        for x in allbooks:
            if x not in personbooks and x.noofcopies > 0 and x.available:
                available_books.append(x)
    else:
        person = Person.objects.get(id = person_id)
        allbooks = Book.objects.all() 
        personbooks = person.books.all()
        available_books=[]
        for x in allbooks:
            if x not in personbooks and x.noofcopies > 0 and x.available:
                available_books.append(x)
    return render(request, 'user/availableBooks.html', {'all_books': allbooks ,'all_avilablebooks': available_books, 'personid' : person_id})


def aboutus(request , person_id):
    return render(request , 'admin/aboutus.html' , {'personid' : person_id} )