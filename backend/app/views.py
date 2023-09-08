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
from random import randint, sample
import json
import os

from django.shortcuts import render
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.db.models import Q
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

import openai

from .models import Card, Deck, Tarot


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


@csrf_exempt
def divination_card_request(request):
    num_cards = int(request.GET.get('num'))
    lang = "fr" if "fr" in request.GET.get('language') else "en"

    # Fetch all Tarot objects with the given language
    all_cards = list(Tarot.objects.filter(lang__exact=lang))

    # Randomly sample cards
    chosen_cards = sample(all_cards, num_cards)

    # Add random orientation to each card
    for card in chosen_cards:
        card.orientation = bool(randint(0, 1))

    cards_data = [model_to_dict(card) for card in chosen_cards]

    return JsonResponse({'cards': cards_data})


@csrf_exempt
def generate_prediction(request):
    question = json.loads(request.body.decode('utf-8')).get("question", None)

    openai.api_key = settings.OPENAI_KEY


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
    query = json.loads(request.GET.get('query'))
    mode = request.GET.get('mode')

    start_date = query.get('start')
    end_date = query.get('end')
    ranks = query.get('ranks')
    towns = query.get('towns')
    suits = query.get('suits')

    # Filter based on the start_date and end_date
    decks = Deck.objects.filter(start_date__gte=start_date, start_date__lte=end_date)

    q_towns = Q()
    if towns:
        for town in towns:
            q_towns |= Q(town=town)

    decks = decks.filter(q_towns)

    if mode == 'card':
        print('card mode!')
        cards = Card.objects.filter(deck__in=decks)
        cards = cards.order_by('deck__start_date', 'deck', 'sort_order')

        q_ranks = Q()
        q_suits = Q()

        if ranks:
            for rank in ranks:
                q_ranks |= Q(rank=rank)

        if suits:
            for suit in suits:
                q_suits |= Q(suit=suit)

        cards = cards.filter(q_ranks & q_suits)

        result = []
        for card in cards:
            card_dict = {
                'title': card.deck.title,
                'image': card.recto_img,
                'rank': card.rank,
                'suit': card.suit,
                'start_date': card.deck.start_date,
                'end_date': card.deck.end_date,
                'maker': card.deck.maker,
                'town': card.deck.town,
                'back_notes': card.back_notes
            }
            result.append(card_dict)

    if mode == 'deck':
        decks = decks.order_by('start_date', 'end_date')

        result = []
        for deck in decks:
            cards = []
            for card in deck.card_set.all().order_by('sort_order'):
                cards.append({
                    'image': card.recto_img,
                    'rank': card.rank,
                    'suit': card.suit,
                    'order': card.sort_order,
                })

            result.append({
                'title': deck.title,
                'start_date': deck.start_date,
                'end_date': deck.end_date,
                'maker': deck.maker,
                'town': deck.town,
                'cards': cards,
            })

    return JsonResponse(result, safe=False)
