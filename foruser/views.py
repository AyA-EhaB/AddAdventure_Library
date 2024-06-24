from django.shortcuts import render,get_object_or_404,redirect
from bookdata.models import *
from fornone.models import *
from django.urls import reverse
from django.db.models import Q
from django.http import JsonResponse
from django.views.decorators.http import require_POST


def home(request , person_id):
    id = person_id
    return render(request , 'user/home.html' , {'personid' : id})


def available_books(request, person_id):
    person = Person.objects.get(id = person_id)
    query = request.GET.get('q', '')

    if query:
        all_books = Book.objects.filter(
            Q(bookname__icontains=query)
            # Q(Author__icontains=query) | 
            # Q(category__icontains=query)
        )
    else:
        all_books = Book.objects.all()

    available_books = [book for book in all_books if book not in person.books.all() and book.noofcopies > 0 and book.available]
    is_ajax_request = request.headers.get("x-requested-with") == "XMLHttpRequest" 
    
    if is_ajax_request:
        data = []
        for book in all_books:
            personavilable = True if book not in person.books.all() else False
            data.append({
                'id': book.id,
                'bookname': book.bookname,
                'image_url': book.image.url if book.image else None,
                'is_available': book.noofcopies > 0 and book.available and personavilable
            })
        return JsonResponse(data, safe=False)
    
    context = {
        'all_avilablebooks': available_books,
        'personid': person_id,
        'all_books': all_books
    }
    return render(request, 'user/availableBooks.html', context)




@require_POST
def borrow_book(request, book_id, person_id):
    person = get_object_or_404(Person, id=person_id)
    book = get_object_or_404(Book, id=book_id)
    
    if book.noofcopies > 0:
        person.books.add(book)
        book.noofcopies -= 1
        if book.noofcopies == 0:
            book.available = False
        book.save()
        person.save()
        return JsonResponse({'success': True})

    return JsonResponse({'success': False, 'message': 'No copies available'}, status=400)


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



def aboutus(request , person_id):
    return render(request , 'user/aboutus.html' , {'personid' : person_id} )


def borrowedBooksDetails(request , person_id , book_id):
    bookdata = Book.objects.get(id = book_id)
    person = Person.objects.get(id = person_id)
    personbooks= person.books.all()
    return render(request , 'user/borrowedbooksdetails.html' , {'book' : bookdata , 'personid' : person_id , 'personbooks' : personbooks})