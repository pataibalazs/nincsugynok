from django.urls import path
from . import views


app_name = 'nincsugynok_app'

urlpatterns = [
    # API endpoints
    path('api/houses/', views.ListHouses.as_view(), name='api_list_houses'),
    path('api/houses/<int:pk>/', views.DetailHouse.as_view(), name='api_detail_house'),

    # Traditional HTML page routes
    path('', views.homepage, name='homepage'),
    path('houses/', views.list_houses, name='list_houses'),
]