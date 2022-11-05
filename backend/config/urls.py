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
from django.urls import path
from app.views import index, about, manufacture, material, fronts, backs, envelopes, iconography, search, games, bibliography

try:
    from ..app import views
except (ValueError, ImportError, ModuleNotFoundError):
    from app import views


urlpatterns = [
    # Django admin page
    path('admin/', admin.site.urls),
    # API endpoints
    path('', views.index),
    path('example/', views.example),
    path('example/<example_id>', views.example),
    path('results/', views.results),

    path('', index, name='home'),
    path('about', about, name='about'),
    path('manufacture', manufacture, name='manufacture'),
    path('material-aspects', material, name='material'),
    path('fronts', fronts, name='fronts'),
    path('backs', backs, name='backs'),
    path('envelopes', envelopes, name='envelopes'),
    path('iconography', iconography, name='iconography'),
    path('search', search, name='search'),
    path('games', games, name='games'),
    path('bibliography', bibliography, name='bibliography')
]
