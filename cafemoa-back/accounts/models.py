from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class User(AbstractUser):
    uid = models.AutoField(primary_key=True)
    role = models.CharField(max_length=20, default='GUEST')
    unickname = models.CharField(max_length=30)