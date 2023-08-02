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

    # Views
    path('', views.index, name='home'),
    path('about', views.about, name='about'),
    path('history', views.history, name='history'),
    path('manufacture', views.manufacture, name='manufacture'),
    path('material-aspects', views.material, name='material'),
    path('material-aspects/fronts', views.fronts, name='fronts'),
    path('material-aspects/backs', views.backs, name='backs'),
    path('material-aspects/envelopes', views.envelopes, name='envelopes'),
    path('iconography', views.iconography, name='iconography'),
    path('iconography/search', views.search, name='search'),
    path('tarot', views.search, name='tarot'),
    path('tarot/tarot-deck', views.search, name='TarotDeck'),
    path('tarot/tarot-history', views.search, name='TarotHistory'),
    path('games', views.games, name='games'),
    path('solitaire', views.solitaire, name='solitaire'),
    path('divination', views.games, name='divination'),
    path('bibliography', views.bibliography, name='bibliography')
]
