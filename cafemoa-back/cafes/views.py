from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Cafe, Menu, Order
from .serializers import CafeSerializer, MenuSerializer, CafeDetailSerializer, OrderSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


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


# 카페 삭제
@api_view(['DELETE'])
def cafedelete(request, cafe_id):
    cafe = get_object_or_404(Cafe, pk=cafe_id)
    cafe.delete()
    return Response({'message':'Cafe has been deleted!'})


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


# 메뉴 삭제
@api_view(['DELETE'])
def menudelete(request, menu_id):
    menu = get_object_or_404(Menu, pk=menu_id)
    menu.delete()
    return Response({'message':'Menu has been deleted!'})


# 주문하기
@api_view(['POST'])
def order(request):
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    return Response(serializer.data)


# 모든 오더 검색!!
@api_view(['GET'])
def orderindex(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders, many = True)
    return Response(serializer.data)


# 한 사람의 주문 체크
@api_view(['GET'])
def getuserorder(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    orders = user.orders.all()
    serializer = OrderSerializer(orders, many = True)
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