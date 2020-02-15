from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
User = get_user_model()


# Create your views here.
@api_view(['GET'])
def index(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def detail(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['POST'])
def signup(request):
    # print(request.data)
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):   # 검증에 실패하면 400 Bad Request 오류를 발생
        serializer.save()  # 에러가 난다는 것은 코드 오류가 있다는 것...?
    return Response(serializer.data)