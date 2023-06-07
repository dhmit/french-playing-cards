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
    path('example/', views.example),
    path('example/<example_id>', views.example),
    path('search-results/', views.search_results),
    path('divination-card/', views.divination_card_request),
    path('generate-prediction/', views.generate_prediction),

    path('', index, name='home'),
    path('about', about, name='about'),
    path('manufacture', manufacture, name='manufacture'),
    path('material-aspects', material, name='material'),
    path('material-aspects/fronts', fronts, name='fronts'),
    path('material-aspects/backs', backs, name='backs'),
    path('material-aspects/envelopes', envelopes, name='envelopes'),
    path('iconography', iconography, name='iconography'),
    path('iconography/search', search, name='search'),
    path('tarot', search, name='tarot'),
    path('tarot/tarot-deck', search, name='TarotDeck'),
    path('tarot/tarot-history', search, name='TarotHistory'),
    # path('iconography/search', showCardSearch),
    path('games', games, name='games'),
    path('bibliography', bibliography, name='bibliography')
]
