from django.urls import path
from . import views

app_name = 'cafes'

urlpatterns = [
    path('', views.index, name = 'index'),
    path('<int:cafe_id>/', views.detail, name = 'detail'),
    path('register/', views.register, name = 'register'),
    path('cafe/delete/<int:cafe_id>/', views.cafedelete, name = 'cafedelete'),
    path('menus/<int:cafe_id>/', views.menus, name = 'menus'),
    path('registermenu/<int:cafe_id>/', views.registermenu, name = 'registermenu'),
    path('menu/delete/<int:menu_id>/', views.menudelete, name = 'menudelete'),
    # path('distanceorder/', views.distanceorder, name = 'distanceorder')

    path('order/', views.order, name = 'order'),
    path('orderindex/', views.orderindex, name = 'orderindex'),
    path('getuserorder/<int:user_id>/', views.getuserorder, name = 'getuserorder')
]