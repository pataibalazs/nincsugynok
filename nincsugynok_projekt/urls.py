from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('nincsugynok_app.urls')),  # Automatically uses the namespace defined in the app's urls.py
]