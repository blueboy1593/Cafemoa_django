from django.urls import path
from . import views

app_name = 'cafes'

urlpatterns = [
    path('', views.index, name = 'index'),
    path('<int:cafe_id>/', views.detail, name = 'detail'),
]