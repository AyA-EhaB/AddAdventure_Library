from django.db import models
from bookdata.models import Book

class Person(models.Model):
    Username = models.CharField(max_length=50 , null=False)
    password = models.CharField(max_length=50 , null=False)
    email=models.EmailField(max_length=200)
    books = models.ManyToManyField(Book, related_name='users', blank=True)
    isAdmin = models.BooleanField(default=False)
    
    def __str__(self):
        return str(self.Username)
    

class contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=200, null=True, blank=True)
    number = models.CharField(max_length=20,null=False, blank=False)
    paragraph = models.TextField(max_length=500, verbose_name='description')

    def __str__(self):
        return self.name





