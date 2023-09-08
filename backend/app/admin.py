"""
This file controls the administrative interface for the web app.
"""

from django.contrib import admin
from .models import Card, Deck, Tarot

admin.site.register(Card)
admin.site.register(Deck)
admin.site.register(Tarot)
