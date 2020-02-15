from django.db import models
from django.conf import settings


class Cafe(models.Model):
    ccid = models.AutoField(primary_key=True)
    cname = models.CharField(max_length=50)
    cdes = models.TextField()
    cpic = models.TextField()
    host = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='mycafe')
    latitude = models.FloatField()
    longitude = models.FloatField()

class Menu(models.Model):
    mmid = models.AutoField(primary_key=True)
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE, related_name='menus')
    mname = models.CharField(max_length=50)
    mpic = models.TextField()
    mtype = models.CharField(max_length=20)
    mprice = models.IntegerField()
    # mamount = models.IntegerField(default=1)

class Order(models.Model):
    ooid = models.AutoField(primary_key=True)
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE, related_name='orders')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='orders')
    content = models.TextField()
    oprice = models.IntegerField()