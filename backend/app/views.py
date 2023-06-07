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
import os
import openai

import json

from django.shortcuts import render
from django.http import JsonResponse
from django.forms.models import model_to_dict

from .models import Card
from .models import Deck
from .models import Tarot


def index(request):
    """
    Home page
    """

    context = {
        'page_metadata': {
            'title': 'Home | French Playing Cards'
        },
        'component_name': 'Home'
    }

    return render(request, 'index.html', context)

def about(request):
    """
    About page
    """

    context = {
        'page_metadata': {
            'title': 'About | French Playing Cards'
        },
        'component_name': 'about'
    }

    return render(request, 'index.html', context)

def manufacture(request):
    """
    Manufacture page
    """

    context = {
        'page_metadata': {
            'title': 'Manufacture | French Playing Cards'
        },
        'component_name': 'manufacture'
    }

    return render(request, 'index.html', context)

def material(request):
    """
    Material aspects page
    """

    context = {
        'page_metadata': {
            'title': 'Material Aspects | French Playing Cards'
        },
        'component_name': 'material'
    }

    return render(request, 'index.html', context)

def fronts(request):
    """
    Fronts page
    """

    context = {
        'page_metadata': {
            'title': 'Fronts | French Playing Cards'
        },
        'component_name': 'fronts'
    }

    return render(request, 'index.html', context)

def backs(request):
    """
    Backs page
    """

    context = {
        'page_metadata': {
            'title': 'Backs | French Playing Cards'
        },
        'component_name': 'backs'
    }

    return render(request, 'index.html', context)

def envelopes(request):
    """
    Envelopes page
    """

    context = {
        'page_metadata': {
            'title': 'Envelopes | French Playing Cards'
        },
        'component_name': 'envelopes'
    }

    return render(request, 'index.html', context)

def iconography(request):
    """
    Face card iconography page
    """

    context = {
        'page_metadata': {
            'title': 'Face Card Iconography | French Playing Cards'
        },
        'component_name': 'iconography'
    }

    return render(request, 'index.html', context)

def search(request):
    """
    Search page
    """

    context = {
        'page_metadata': {
            'title': 'Search Database | French Playing Cards'
        },
        'component_name': 'search'
    }

    return render(request, 'index.html', context)

def games(request):
    """
    Play games page
    """

    context = {
        'page_metadata': {
            'title': 'Play Games! | French Playing Cards'
        },
        'component_name': 'games'
    }

    return render(request, 'index.html', context)

def bibliography(request):
    """
    Bibliography page
    """

    context = {
        'page_metadata': {
            'title': 'Bibliography | French Playing Cards'
        },
        'component_name': 'bibliography'
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

def divination_card_request(request):
    num = int(request.GET.get('number'))
    up = bool(int(request.GET.get('orientation')))
    lang = "fr" if "fr" in request.GET.get('language') else "en"

    card = Tarot.objects.filter(number__exact=num).filter(lang__exact=lang).get(orientation=up)

    return JsonResponse({'card': model_to_dict(card)})

def generate_prediction(request):
    question = json.loads(request.body.decode('utf-8')).get("question", None)
    openai.api_key = os.getenv("OPENAI_API_KEY")

    if question: 
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": question}
            ],
            temperature=0.6,
            max_tokens=500
        )
        response = {'response': completion['choices'][0]['message']['content']}
    else:
        response = {'response': ""}

    return JsonResponse(response)


def search_results(request):
    # De-stringify    
    query = json.loads(request.GET.get('query'))

    # Print statements for testing
    # print(type(query))
    # print(request.GET)
    # print(query)
    # keys = request.GET.keys()  # keys, like 'periods' or 'cards'
    # print(request.GET)
    # print(keys)  # testing statement to see what keys look like
    # request.GET.get(key) is value of key

    result = Card.objects.none()

    if 'periods' in query:
        decks = Deck.objects.none()
        for period in query['periods']:
            decks = decks | Deck.objects.filter(period=period)
        for deck in decks:
            result = result | Card.objects.filter(deck=deck)

    if 'cards' in query:
        # for card in query['cards']:
        #     result = result | Card.objects.filter(card=card)
        if not result.exists():
            for card in query['cards']:
                result = result | Card.objects.filter(card=card)
        else:
            old_result = result
            add_on = Card.objects.none()
            for card in query['cards']:
                add_on = add_on | Card.objects.filter(card=card)
            result = old_result & add_on

    if 'suits' in query:
        if not result.exists():
            for suit in query['suits']:
                result = result | Card.objects.filter(suit=suit)
        else:
            old_result = result
            add_on = Card.objects.none()
            for suit in query['suits']:
                add_on = add_on | Card.objects.filter(suit=suit)
            result = old_result & add_on

    if 'towns' in query:
        # for town in query['towns']:
        #     result = result & Card.objects.filter(town=town)
        if not result.exists():
            for town in query['towns']:
                if town == 'Unknown':
                    result = result | Card.objects.filter(town='Unknown') | Card.objects.filter(
                        town="nan")
                else:
                    result = result | Card.objects.filter(town=town)
        else:
            old_result = result
            add_on = Card.objects.none()
            for town in query['towns']:
                if town == 'Unknown':
                    add_on = add_on | Card.objects.filter(town='Unknown') | Card.objects.filter(
                        town="nan")
                else:
                    add_on = add_on | Card.objects.filter(town=town)
            result = old_result & add_on



    # if the user didn't query for anything in particular:
    if len(query) == 0:
        result = Card.objects.all()

    result = result.order_by('start_date', 'deck', 'suit')

    final_result = []
    for card in result:
        card_dict = {
            'title': card.title,
            'image': card.recto_img,
            'card': card.card,
            'suit': card.suit,
            'start_date': card.start_date,
            'end_date': card.end_date,
            'maker': card.maker,
            'town': card.town,
            'back_notes': card.back_notes
        }
        final_result.append(card_dict)

    return JsonResponse({'cards': final_result})
