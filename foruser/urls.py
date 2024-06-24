from django.urls import path
from bookdata.models import *
from . import views

urlpatterns = [
    path('userhome/<int:person_id>/', views.home, name="userhome"),
    path('availableBooks/<int:person_id>/', views.available_books, name="availableBooks"),
    path('borrowedBooks/<int:person_id>/' , views.borrowedBooks , name="borrowedBooks"),
    path('borrowedBooksdetails/<int:book_id>/<int:person_id>/' , views.borrowedBooksDetails , name="borrowedBooksdetails"),
    path('borrow_book/<int:book_id>/<int:person_id>/', views.borrow_book, name="borrow_book"),
    path('return_book/<int:book_id>/<int:person_id>/', views.return_book, name="return_book"),
    path('bookdetails/<int:book_id>/<int:person_id>/' , views.bookdetails, name="bookdetails"),
    path('usercontactus/<int:person_id>/', views.contactus, name="usercontactus"),
    path('useraboutus/<int:person_id>/' , views.aboutus , name="useraboutus"),
]

