from django.db import models
from django.conf import settings


class Cafe(models.Model):
    cname = models.CharField(max_length=50)
    cdes = models.TextField()
    cpic = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='cafe')


class Menu(models.Model):
    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE, related_name='menus')
    mname = models.CharField(max_length=50)
    mpic = models.TextField()
    mtype = models.CharField(max_length=20)