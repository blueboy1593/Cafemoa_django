from django.db import models
from django.conf import settings


class Cafe(models.Model):
    ccid = models.AutoField(primary_key=True)
    cname = models.CharField(max_length=50)
    cdes = models.TextField()
    cpic = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='cafe')


class Menu(models.Model):
    mmid = models.AutoField(primary_key=True)
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE, related_name='menus')
    mname = models.CharField(max_length=50)
    mpic = models.TextField()
    mtype = models.CharField(max_length=20)
    # mprice = models.IntegerField()

class Order(models.Model):
    ooid = models.AutoField(primary_key=True)
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE, related_name='orders')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='orders')
    content = models.TextField()