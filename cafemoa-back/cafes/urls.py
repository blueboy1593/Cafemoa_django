from django.urls import path
from . import views

app_name = 'cafes'

urlpatterns = [
    path('', views.index, name = 'index'),
    path('<int:cafe_id>/', views.detail, name = 'detail'),
    path('register/', views.register, name = 'register'),
    path('menus/<int:cafe_id>/', views.menus, name = 'menus'),
    path('registermenu/<int:cafe_id>/', views.registermenu, name = 'registermenu')
]