"""
Models for the the PLAYING CARDS web app.
Django docs here: https://docs.djangoproject.com/en/3.2/topics/db/models/
"""

from django.db import models
from django.conf import settings
from enum import Enum

ABBREVIATIONS_TO_CARD_SORT = {
    # ranks
    'K': 0,
    'Q': 1,
    'J': 2,
    'A': 3,

    # suits
    'S': 0,
    'H': 1,
    'D': 2,
    'C': 3,
}

class Card(models.Model):
    """
    The Card model
    """
    # auto id generated
    deck = models.ForeignKey('Deck', null=True, on_delete=models.DO_NOTHING)
    db_id = models.CharField(max_length=30, null=True)
    rank = models.CharField(max_length=1, null=True)
    suit = models.CharField(max_length=1, null=True)
    type = models.CharField(max_length=30, null=True)
    back_notes = models.CharField(max_length=30, null=True)
    url = models.URLField(max_length=200, null=True)
    recto_img = models.FilePathField()
    verso_img = models.FilePathField()

    # So that we don't have to do any sorting in Python, we define a sort order
    # for cards within a deck as follows:
    #     Each suit occupies 4 slots (K, Q, J, A) -- kings high, so low in sort order
    #     Suits follow traditional order: S, H, D, C -- spades high, so low in sort order
    # So, e.g., king of spades is 0, ace of spades 3, king of hearts 4, etc.
    # We bake in the sort order in our data importer so we never have to futz with it afterwards
    sort_order = models.IntegerField()


    def __str__(self):
        return f'{self.deck.name} - {self.rank}{self.suit}'

    class Meta:
        ordering = ['sort_order']


class Deck(models.Model):
    """
    The Deck model
    """
    # auto id generated
    name = models.CharField(max_length=300, null=True)  # for the purposes of searching
    period = models.CharField(max_length=1, null=True)
    start_date = models.IntegerField(null=True)
    end_date = models.IntegerField(null=True)
    maker = models.CharField(max_length=30, null=True)
    town = models.CharField(max_length=30, null=True)
    title = models.CharField(max_length=200, null=True)

    # period is either B, D, or A (before, during, after revolution)

    def __str__(self):
        return f"{self.name} ({self.start_date})"

class Tarot(models.Model):
    lang = models.CharField(max_length=2)
    number = models.IntegerField()
    orientation = models.BooleanField(blank=True, null=True)
    card = models.CharField(max_length=1)
    title = models.CharField(max_length=30, blank=True)
    subtitle = models.CharField(max_length=30, blank=True)
    pair = models.CharField(max_length=20, blank=True)
    etteilla = models.CharField(max_length=25, blank=True)
    quad = models.CharField(max_length=20, blank=True)
    triple = models.CharField(max_length=20, blank=True)
    double = models.CharField(max_length=20, blank=True)
    image = models.FilePathField(path="assets/img/divination/", null=True)

    def __str__(self):
        return f"{self.card}"
