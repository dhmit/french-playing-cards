"""
These view functions and classes implement both standard GET routes and API endpoints.

GET routes produce largely empty HTML pages that expect a React component to attach to them and
handle most view concerns. You can supply a few pieces of data in the render function's context
argument to support this expectation.

Of particular use are the properties: page_metadata, component_props, and component_name:
page_metadata: these values will be included in the page's <head> element.
Currently, only the `title` property is used. component_props: these can be any properties you
wish to pass into your React components as its highest-level props.
component_name: this should reference the exact name of the React component
you intend to load onto the page.

Example:
context = {
    'page_metadata': {
        'title': 'Example ID page'
    },
    'component_props': {
        'id': example_id
    },
    'component_name': 'ExampleId'
}
"""
import json

from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import Q

from .models import Card
from .models import Deck


def index(request):
    """
    Home page
    """

    context = {
        'page_metadata': {
            'title': 'Home page'
        },
        'component_name': 'Home'
    }

    return render(request, 'index.html', context)


def example(request, example_id=None):
    """
    Example page
    """

    context = {
        'page_metadata': {
            'title': 'Example ID page'
        },
        'component_props': {
            'id': example_id
        },
        'component_name': 'ExampleId'
    }
    return render(request, 'index.html', context)


def results(request):
    # de-stringify
    dic = json.loads(request.GET.get('0'))  # res is a dictionary
    # print(type(dic))
    # print(dic)
    # keys = request.GET.keys()  # keys, like 'periods' or 'cards'
    #
    # print(request.GET)
    # print(keys)  # testing statement to see what keys look like
    # request.GET.get(key) is value of key

    # otherwise:
    result = Card.objects.none()

    # periods

    if 'periods' in dic:
        decks = Deck.objects.none()
        for period in dic['periods']:
            decks = decks | Deck.objects.filter(period=period)
        print("dcks!", decks)
        for deck in decks:
            result = result | Card.objects.filter(deck=deck)
        print("cards", result)

    # cards
    if 'cards' in dic:
        # for card in dic['cards']:
        #     result = result | Card.objects.filter(card=card)
        if not result.exists():
            for card in dic['cards']:
                result = result | Card.objects.filter(card=card)
        else:
            old_result = result
            add_on = Card.objects.none()
            for card in dic['cards']:
                add_on = add_on | Card.objects.filter(card=card)
            result = old_result & add_on

    # suits
    if 'suits' in dic:
        if not result.exists():
            for suit in dic['suits']:
                result = result | Card.objects.filter(suit=suit)
        else:
            old_result = result
            add_on = Card.objects.none()
            for suit in dic['suits']:
                add_on = add_on | Card.objects.filter(suit=suit)
            result = old_result & add_on

    # front or back
    if 'rectoVerso' in dic:
        # for rv in dic['rectoVerso']:
        #     result = result & Card.objects.filter(recto_or_verso=rv)
        if not result.exists():
            for rv in dic['rectoVerso']:
                result = result | Card.objects.filter(recto_or_verso=rv)
        else:
            old_result = result
            add_on = Card.objects.none()
            for rv in dic['rectoVerso']:
                add_on = add_on | Card.objects.filter(recto_or_verso=rv)
            result = old_result & add_on

    # back notes
    if 'backNotes' in dic:
        # for back_note in dic['backNotes']:
        #     result = result & Card.objects.filter(back_notes=back_note)

        if not result.exists():
            for back_note in dic['backNotes']:
                if back_note == 'Unknown':
                    result = result | Card.objects.filter(back_notes='Unknown') | Card.objects.filter(
                        back_notes="nan")
                else:
                    result = result | Card.objects.filter(back_notes=back_note)
        else:
            old_result = result
            add_on = Card.objects.none()
            for back_note in dic['backNotes']:
                if back_note == 'Unknown':
                    add_on = add_on | Card.objects.filter(back_notes='Unknown') | Card.objects.filter(
                        back_notes="nan")
                else:
                    add_on = add_on | Card.objects.filter(back_notes=back_note)
            result = old_result & add_on

    # towns
    if 'towns' in dic:
        # for town in dic['towns']:
        #     result = result & Card.objects.filter(town=town)
        if not result.exists():
            for town in dic['towns']:
                if town == 'Unknown':
                    result = result | Card.objects.filter(town='Unknown') | Card.objects.filter(
                        town="nan")
                else:
                    result = result | Card.objects.filter(town=town)
        else:
            old_result = result
            add_on = Card.objects.none()
            for town in dic['towns']:
                if town == 'Unknown':
                    add_on = add_on | Card.objects.filter(town='Unknown') | Card.objects.filter(
                        town="nan")
                else:
                    add_on = add_on | Card.objects.filter(town=town)
            result = old_result & add_on

    # makers
    if 'makers' in dic:
        # for maker in dic['makers']:
        #     result = result & Card.objects.filter(maker=maker)

        if not result.exists():
            for maker in dic['makers']:
                if maker == 'Unknown':
                    result = result | Card.objects.filter(maker='Unknown') | Card.objects.filter(
                        maker="nan")
                else:
                    result = result | Card.objects.filter(maker=maker)
        else:
            old_result = result
            add_on = Card.objects.none()
            for maker in dic['makers']:
                if maker == 'Unknown':
                    add_on = add_on | Card.objects.filter(maker='Unknown') | Card.objects.filter(
                        maker="nan")
                else:
                    add_on = add_on | Card.objects.filter(maker=town)
            result = old_result & add_on

    # if the user didn't query for anything in particular:
    if len(dic) == 0:
        result = Card.objects.all()

    final_result = []
    for card in result:
        final_result.append([card.title, card.image, card.card, card.suit, card.start_date,
                             card.end_date, card.maker, card.town, card.back_notes])
    return JsonResponse({'cards': final_result})

    # result = result.values()
    # result = list(result)
    # return JsonResponse({'cards': result})
