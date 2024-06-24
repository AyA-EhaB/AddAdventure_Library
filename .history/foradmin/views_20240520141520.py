from django.shortcuts import render , redirect
from bookdata.models import *
from fornone.models import Person
from django.db.models import Q

def home(request ):
    return render(request , 'admin/home.html')


def add(request):
    if request.method == 'POST':
        bookname = request.POST.get("bookname")
        author = request.POST.get("auther")
        category = request.POST.get("Category")
        publisher = request.POST.get("Publisher")
        publisher_data = request.POST.get("PublicationDate")
        no_of_pages = request.POST.get("noofpages")
        description = request.POST.get("description")
        no_of_copies = request.POST.get("noofcopies")
        available = request.POST.get("available")

        image = None
        if 'Image' in request.FILES:
            image = request.FILES.get("Image")

        if available == "on":
            available = True
        else:
            available = False

        new_book = Book(bookname=bookname, Author=author, category=category,
                        publisher=publisher, PublicationDate=publisher_data,
                        Description=description, image=image, noofpages=no_of_pages,
                        noofcopies=no_of_copies, available=available)
        new_book.save()
        return redirect('admindisplay')
        
    return render(request, 'admin/add.html')



def display(request):
    data = Book.objects.all()
    dataCount = data.count()
    return render(request , 'admin/display.html' , {'data' : data , 'count' : dataCount})

def booklist(request):
    data = Book.objects.all()
    dataCount = data.count()
    return render(request , 'admin/booklist.html' , {'data' : data , 'count' : dataCount})

def edit(request , book_id ):
    if request.method == 'POST':
        book = Book.objects.get(id = book_id)
        if 'bookImage' in request.FILES:
            book.image = request.FILES.get("bookImage")
        print(request.FILES)
        book.bookname = request.POST.get("bookname")
        book.Author = request.POST.get("author")
        book.category = request.POST.get("Category")
        book.publisher = request.POST.get("Publisher")
        book.PublicationDate = request.POST.get("PublicationDate")
        book.noofpages = request.POST.get("NumberofPages")
        book.Description = request.POST.get("description")
        book.noofcopies = request.POST.get("noofcopies")
        if request.POST.get("available"):
            book.available = True
        else:
            book.available = False
        book.save()
        return redirect('admindisplay')

    data = Book.objects.get(id = book_id)    
    return render(request , 'admin/editbook.html' ,  {'book' : data} )

def dash(request):
    return redirect('admindisplay')

def delete(request , book_id):
    if request.method == 'POST':
        book = Book.objects.get(id = book_id)
        book.delete()
        
    return redirect('admindisplay')

def aboutus(request):
    return render(request , 'admin/aboutus.html' )

def contactus(request):
    if request.method=="POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        number = request.POST.get('number')
        paragraph = request.POST.get('paragraph')
        data = contact(name = name, email = email, number = number, paragraph = paragraph)
        data.save()
        
    return render(request , 'admin/contactus.html')

def booklist(request):
    query = request.GET.get('q')
    dataCount = 0  
    if query:
        data = Book.objects.filter(
            Q(bookname__icontains=query) | 
            Q(Author__icontains=query) | 
            Q(category__icontains=query)
        )
        dataCount = data.count() 
    else:
        data = Book.objects.all()
        dataCount = data.count()
    return render(request , 'admin/booklist.html' , {'data' : data , 'count' : dataCount})

