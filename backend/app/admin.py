"""
This file controls the administrative interface for the web app.
"""

from django.contrib import admin
from .models import Card, Deck


models_to_register = [
    Card,
    Deck,
]

for model in models_to_register:
    admin.site.register(model)
