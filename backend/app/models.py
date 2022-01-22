"""
Models for the the PLAYING CARDS web app.
Django docs here: https://docs.djangoproject.com/en/3.2/topics/db/models/
"""

from django.db import models


class Card(models.Model):
    # auto id generated
    deck = models.ForeignKey('Deck', null=True, on_delete=models.DO_NOTHING)
    db_id = models.CharField(max_length=30, null=True)
    recto_or_verso = models.CharField(max_length=1, null=True)
    card = models.CharField(max_length=1, null=True)
    suit = models.CharField(max_length=1, null=True)
    title = models.CharField(max_length=200, null=True)
    start_date = models.IntegerField(null=True)
    end_date = models.IntegerField(null=True)
    maker = models.CharField(max_length=30, null=True)
    town = models.CharField(max_length=30, null=True)
    type = models.CharField(max_length=30, null=True)
    back_notes = models.CharField(max_length=30, null=True)
    url = models.URLField(max_length=200, null=True)
    image = models.FilePathField(path="app/images/", null=True)


class Deck(models.Model):
    # auto id generated
    name = models.CharField(max_length=300, null=True)  # for the purposes of searching
    period = models.CharField(max_length=1, null=True)
    # period is either B, D, or A (before, during, after revolution)

    def __str__(self):
        # this just prints a helpful string in python console.
        # Can be whatever you need (like printing the name if it exists)
        if self.name:
            return "%s: %s" % (self.id, self.name)
        return "%s" % self.id
