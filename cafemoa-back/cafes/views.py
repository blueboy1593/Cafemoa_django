from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Cafe, Menu
from .serializers import CafeSerializer, MenuSerializer, CafeDetailSerializer
from haversine import haversine


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


# 카페 등록
@api_view(['POST'])
def register(request):
    serializer = CafeSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    return Response(serializer.data)


# 메뉴 등록
@api_view(['POST'])
def registermenu(request, cafe_id):
    temp = request.data
    temp['cafe'] = cafe_id
    print(temp)
    serializer = MenuSerializer(data=temp)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    return Response(serializer.data)


# @api_view(['POST'])
# def distanceorder(request):
#     position = request.data
#     mypos = (position['latitude'], position['longitude'])
#     cafes = Cafe.objects.all()
#     for cafe in cafes:
#         clat = cafe.latitude
#         clon = cafe.longitude
#         cpos = (clat, clon)
#         dis = haversine(mypos, cpos) * 1000
#         cafe['dis'] = dis
#     print(cafes)
#     # serializers = CafeSerializer(cafes, many = True)
#     # print(cafes)
#     # print(serializers.data)
#     return Response('aaaaa')