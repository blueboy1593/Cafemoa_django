from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class User(AbstractUser):
    role = models.CharField(max_length=20)
    upic = models.TextField()