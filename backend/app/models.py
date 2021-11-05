"""
Models for the the PLAYING CARDS web app.
Django docs here: https://docs.djangoproject.com/en/3.2/topics/db/models/
"""

from django.db import models


class Card(models.Model):
    # auto id generated
    recto_or_verso = models.CharField(max_length=1)
    deck = models.ForeignKey('Deck', null=True, on_delete=models.DO_NOTHING, )


class Deck(models.Model):
    # auto id generated
    name = models.CharField(max_length=300)

    def __str__(self):
        # this just prints a helpful string in python console.
        # Can be whatever you need (like printing the name if it exists)
        if self.name:
            return "%s: %s" % (self.id, self.name)
        return "%s" % self.id
