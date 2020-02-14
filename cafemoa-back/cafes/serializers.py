from rest_framework import serializers
from .models import Cafe, Menu

class CafeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cafe
        fields = '__all__'


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'

class CafeDetailSerializer(serializers.ModelSerializer):
    menus = MenuSerializer(many=True)
    class Meta:
        model = Cafe
        fields = '__all__'