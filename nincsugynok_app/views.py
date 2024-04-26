from django.shortcuts import render
from .models import House
from rest_framework import generics
from .serializers import HouseSerializer

# API views
class ListHouses(generics.ListAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer

class DetailHouse(generics.RetrieveAPIView):
    queryset = House.objects.all()
    serializer_class = HouseSerializer

def homepage(request):
    return render(request, 'homepage.html')

def list_houses(request):
    houses = House.objects.all()
    return render(request, 'list_houses.html', {'houses': houses})