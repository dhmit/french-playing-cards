from app.models import Card
from app.models import Deck

"""
This file defines the entire search function.
Search function overview:
Receive user input, search through database for 'relevant' Card objects, then return a collection
of all the relevant Card objects.
Need to figure out 1. How to determine if a Card object is relevant, 2. What type of collection
the relevant Card objects should be returned in, 3. How to deal with multiple-word inputs

** Assume for now that inputs are always 1 word with no space chars ***
"""

"""
Searches through database for relevant results.
    Parameters:
        input (str): The user's input (most likely submitted via a form in frontend)
    Returns:
        results (collection): The collection (list?) of relevant Card objects
"""
def search(input):
    input = input.lower()
    recto_verso = get_recto_verso(input)
    card = get_card(input)
    suit = get_suit(input)
    title = get_title(input)
    date = get_date(input)
    maker = get_maker(input)
    town = get_town(input)
    type = get_type(input)
    back_notes = get_back_notes(input)
    deck_name = get_deck_name(input)
    period = get_deck_period(input)

    results = (recto_verso | card | suit | title | date | maker | town | type | back_notes | \
              deck_name | period).distinct()
    return results


"""
Helper function: CARD RECTO/VERSO
Given a user input, function returns a QuerySet of any Card objects
that are recto/verso
    Parameters:
        input (str): The user's input
    Returns:
        results (collection): The collection of relevant Card objects
"""
def get_recto_verso(input):
    input = input.lower()
    if "front" in input or "recto" in input or "face" in input:
        return Card.objects.filter(recto_or_verso='R')
    if "back" in input or "verso" in input:
        return Card.objects.filter(recto_or_verso='V')
    return Card.objects.none()


"""
Helper function: CARD CARD
Given a user input, function returns a QuerySet of any Card objects
with that card (Ace, Jack, Queen, King)
    Parameters:
        input (str): The user's input
    Returns:
        results (collection): The collection of relevant Card objects
"""
def get_card(input):
    input = input.lower()
    if 'ace' in input or input == 'a':
        return Card.objects.filter(card='A')
    if 'jack' in input or input == 'j':
        return Card.objects.filter(card='J')
    if 'queen' in input or input == 'q':
        return Card.objects.filter(card='Q')
    if 'king' in input or input == 'k' :
        return Card.objects.filter(card='K')
    else:
        return Card.objects.none()


"""
Helper function: CARD SUIT
Given a user input, function returns a QuerySet of any Card objects
with that suit (clubs, diamonds, hearts, spades)
    Parameters:
        input (str): The user's input
    Returns:
        results (collection): The collection of relevant Card objects
"""
def get_suit(input):
    input = input.lower()
    if 'club' in input or 'clover' in input or input == 'c':
        return Card.objects.filter(suit='C')
    if 'diamond' in input or input == 'd':
        return Card.objects.filter(suit='D')
    if 'heart' in input or input == 'h':
        return Card.objects.filter(suit='H')
    if 'spade' in input or input == 's':
        return Card.objects.filter(suit='S')
    else:
        return Card.objects.none()


# TODO: how to make this helper function more sophisticated - not very flexible
"""
Helper function: CARD TITLE
Given a user input, function returns a QuerySet of any Card objects
with that title
    Parameters:
        input (str): The user's input
    Returns:
        results (collection): The collection of relevant Card objects
"""
def get_title(input):
    input = input.lower()
    return Card.objects.filter(title__contains=input)


"""
Helper function: CARD DATE
Given a user input, function returns a QuerySet of any Card objects made on that date / Card objects
where the start_date/end_date range includes the inputted date
    Parameters:
        input (int): The user's input
    Returns:
        results (collection): The collection of relevant Card objects
"""
def get_date(input):
    if input.isnumeric():
        input = int(input)
        return Card.objects.filter(start_date__lte=input, end_date__gte=input)
    return Card.objects.none()


"""
Helper function: CARD MAKER
Given a user input, function returns a QuerySet of any Card objects made by that maker
    Parameters:
        input (int): The user's input
    Returns:
        results (collection): The collection of relevant Card objects
"""
def get_maker(input):
    input = input.lower()
    return Card.objects.filter(maker__contains=input)


"""
Helper function: CARD TOWN
Given a user input, function returns a QuerySet of any Card objects from that town
    Parameters:
        input (int): The user's input
    Returns:
        results (collection): The collection of relevant Card objects
"""
def get_town(input):
    input = input.lower()
    return Card.objects.filter(town__contains=input)


"""
Helper function: CARD TYPE
Given a user input, function returns a QuerySet of any Card objects of that type
    Parameters:
        input (int): The user's input
    Returns:
        results (collection): The collection of relevant Card objects
"""
def get_type(input):
    input = input.lower()
    return Card.objects.filter(type__contains=input)


"""
Helper function: CARD BACK NOTES
Given a user input, function returns a QuerySet of any Card objects with those back notes
(typographical letters, library card catalogue, or call and response)
    Parameters:
        input (int): The user's input
    Returns:
        results (collection): The collection of relevant Card objects
"""
def get_back_notes(input):
    if "typographical" in input or "letter" in input:
        return Card.objects.filter(back_notes="typographical letters")
    if "library" in input or "card" in input or "catalogue" in input:
        return Card.objects.filter(back_notes="library card catalogue")
    if "call" in input or "response" in input:
        return Card.objects.filter(back_notes="call and response")
    else:
        return Card.objects.none()


"""
Helper function: DECK NAME
Given a user input that is the name of a deck, function returns a QuerySet of any Card objects
part of that deck
    Parameters:
        input (str): The user's input
    Returns:
        results (collection): The collection of relevant Card objects

Search through database of cards: get the Deck object that has the given name, then filter results
for Cards that belong to that Deck
"""
def get_deck_name(input):
    input = input.lower()
    decks = Deck.objects.filter(name__contains=input)
    if decks.count() == 0:
        return Card.objects.none()

    results = Card.objects.none()
    for deck in decks:
        results = results | Card.objects.filter(deck=deck)
    return results


"""
Helper function: DECK PERIOD
Given a user input, function returns a QuerySet of any Card objects
part of the matching period (B, D, or A)
    Parameters:
        input (str): The user's input
    Returns:
        results (collection): The collection of relevant Card objects
"""
def get_deck_period(input):
    input = input.lower()
    if 'before' in input or 'pre' in input:
        decks = Deck.objects.filter(period='B')
    elif 'after' in input or 'post' in input:
        decks = Deck.objects.filter(period='A')
    elif 'during' in input or 'revolution' in input:
        decks = Deck.objects.filter(period='D')
    else:
        decks = Deck.objects.none()  # empty QuerySet if there are no results

    if decks == Deck.objects.none():
        return decks

    results = Card.objects.none()
    for deck in decks:
        results = results | Card.objects.filter(deck=deck)
    return results


"""
Helper function for main testing
Print the db IDs of all Cards in the results QuerySet
    Parameters:
        collection (collection): The collection of Cards to print
    Returns:
        None
"""
def printResults(collection):
    num_results = 0
    for card in collection:
        num_results += 1
        print(card.db_id)
    print("\n", num_results, "matching results", "\n")


""" Main function for testing """
if __name__ == "__main__":
    # results0 = get_recto_verso("ReCto")
    # printResults(results0)
    #
    # results1 = get_deck_name("Dauphin")
    # printResults(results1)
    #
    # results2 = get_deck_period("post-revolutionary")
    # printResults(results2)
    #
    # results3 = get_card('aCe')
    # printResults(results3)

    # results4 = get_card('')
    # printResults(results4)  # expect an empty QuerySet

    # results5 = get_suit('cLubs')
    # printResults(results5)
    #
    # results6 = get_title('Jeu de cartes de fantaisie de la Révolution de 1830')
    # printResults(results6)
    #
    # results7 = get_date('1794')
    # printResults(results7)

    # results8 = get_maker('dugourc')
    # printResults(results8)
    #
    # results9 = get_town('Montpellier')
    # printResults(results9)

    # results9_ = get_town('Boston')
    # printResults(results9_)  # expect empty QuerySet
    #
    # results10 = get_type('ESC')
    # printResults(results10)
    #
    # results11 = get_back_notes('catalogue')
    # printResults(results11)
    #
    # results12 = get_back_notes('call')
    # printResults(results12)

    """ *** Testing search function now *** """

    # search1 = search('vErsO')
    # printResults(search1)
    #
    # search2 = search('esc')
    # printResults(search2)

    # search3 = search('pre-revolutionary')
    # printResults(search3)

    # search4 = search('q')
    # printResults(search4)  # expect all queens, and any other fields that contain 'q'

    # search5 = search('jeu')
    # printResults(search5)  # expect any cards that have 'jeu' in their title

    # search6 = get_date('1794')
    # printResults(search6)
    #
    # search7 = get_maker('dugourc')
    # printResults(search7)

    # search8 = get_town('Montpellier')
    # printResults(search8)
    #
    # search9 = search('game')
    # printResults(search9)  # expect the War Games cards because their type is 'war games'

    # search10 = search('letter')
    # printResults(search10)  # expect cards with back notes typographical letters

    search_results = search('clubs')
    printResults(search_results)
