from django.urls import path
from . import views
urlpatterns = [
    path('' , views.home , name="nonehome"),
    path('aboutus' , views.aboutus , name="noneaboutus"),
    path('booklist' , views.booklist , name="nonebooklist"),
    path('login/' , views.login , name="login"),
    path('signup/' , views.signup , name="signup"),
    path('bookdetails/<int:book_id>/' , views.bookdetails , name="bookdetailsfornone"),
    path('nonecontactus', views.contactus, name="nonecontactus"),
    path('nonebooklist' , views.booklist , name="nonebooklist"),
    # path('search' ,SearchView.as_view(), name="search")
]
