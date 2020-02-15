from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Cafe, Menu
from .serializers import CafeSerializer, MenuSerializer, CafeDetailSerializer


@api_view(['GET'])
def index(request):
    cafes = Cafe.objects.all()
    serializer = CafeSerializer(cafes, many = True)
    return Response(serializer.data)


@api_view(['GET'])
def detail(request, cafe_id):
    cafe = get_object_or_404(Cafe, pk=cafe_id)
    serializer = CafeDetailSerializer(cafe)
    return Response(serializer.data)


@api_view(['GET'])
def menus(request, cafe_id):
    cafe = get_object_or_404(Cafe, pk=cafe_id)
    menus = cafe.menus.all()
    serializer = MenuSerializer(menus, many = True)
    return Response(serializer.data)


@api_view(['POST'])
def register(request):
    print(request.data)
    serializer = CafeSerializer(data=request.data)
    print(serializer)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    return Response(serializer.data)