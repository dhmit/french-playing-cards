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
from django.shortcuts import render
from django.http import JsonResponse
from .models import Card
from .models import Deck
import json


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
    dic = {}
    keys = request.GET.keys()  # keys, like 'period' or 'cards'
    for key in keys:
        dic[key] = str(request.GET.get(key))  # request.GET.get(key) is value of key

    # TODO: filter through database; the filter statement below is just for testing
    cards = Card.objects.filter(card='A').values()
    cards_list = list(cards)

    return JsonResponse({"cards": cards_list})

    # context = {
    #     'page_metadata': {
    #         'title': 'Results page'
    #     },
    #     'component_props': {
    #         'card_results': cards
    #     },
    #     'component_name': 'Results'
    # }
    #
    # return render(request, 'index.html', context)
