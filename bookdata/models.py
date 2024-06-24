from django.db import models

class Book(models.Model):
    bookname = models.CharField(max_length=500, default="")
    Author = models.CharField(max_length=500, default="")
    publisher = models.CharField(max_length=500, default="")
    PublicationDate = models.DateField(default="0000-00-00")  
    Description = models.TextField(default="")  
    image = models.ImageField(upload_to='photo/%y/%m/%d', default='default.PNG')
    noofpages = models.IntegerField()
    borrowed = models.BooleanField(default=False)
    available = models.BooleanField(default=True)
    c = [
        ('Religious', 'Religious'),
        ('Psychology', 'Psychology'),
        ('Technology', 'Technology'),
        ('History', 'History'),
        ('Autobiography', 'Autobiography'),
        ('Novel', 'Novel'),
    ]
    category = models.CharField(max_length=100, choices=c)
    noofcopies = models.IntegerField(default=0)

    def __str__(self):
        return str(self.bookname)
