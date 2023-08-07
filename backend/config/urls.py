"""
URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URL configuration
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from app import views


urlpatterns = [
    # Django admin page
    path('admin/', admin.site.urls),

    # API endpoints
    path('search-results/', views.search_results),
    path('divination-card/', views.divination_card_request),
    path('generate-prediction/', views.generate_prediction),

    # Views
    re_path(r'^.*$', views.index),
]
