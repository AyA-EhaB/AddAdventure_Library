from django.urls import path
from . import views

urlpatterns = [
    path('' , views.home , name="adminhome"),
    path('add' , views.add , name="add"),
    path('admindisplay' , views.display , name="admindisplay"),
    path('edit/<int:book_id>' , views.edit , name="edit"),
    path('admindash' , views.dash , name="admindash"),
    path('delete/<int:book_id>/' , views.delete , name="delete"),
    path('booklist', views.booklist , name="booklist"),
    path('admincontactus' , views.contactus , name="admincontactus"),
    path('aboutus' , views.aboutus , name="adminaboutus"),
]
