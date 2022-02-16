"""
This file defines the entire search function.
Search function overview:
Receive user input, search through database for 'relevant' Card objects, then return a collection
of all the relevant Card objects.
Need to figure out 1. How to determine if a Card object is relevant, 2. What type of collection
the relevant Card objects should be returned in, 3. How to deal with multiple-word inputs

** Assume for now that inputs are always 1 word with no space chars ***
"""

from app.models import Card
from app.models import Deck


def search(input_text):
    """
    Searches through database for relevant results.
        Parameters:
            input_text (str): The user's input_text (most likely submitted via a form in frontend)
        Returns:
            results (collection): The collection (list?) of relevant Card objects
    """

    input_text = input_text.lower()
    recto_verso = get_recto_verso(input_text)
    card = get_card(input_text)
    suit = get_suit(input_text)
    title = get_title(input_text)
    date = get_date(input_text)
    maker = get_maker(input_text)
    town = get_town(input_text)
    input_type = get_type(input_text)
    back_notes = get_back_notes(input_text)
    deck_name = get_deck_name(input_text)
    period = get_deck_period(input_text)

    results = (recto_verso | card | suit | title | date | maker | town | input_type | back_notes | \
               deck_name | period).distinct()
    return results


def get_recto_verso(input_text):
    """
    Helper function: CARD RECTO/VERSO
    Given a user input_text, function returns a QuerySet of any Card objects
    that are recto/verso
        Parameters:
            input_text (str): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects
    """

    input_text = input_text.lower()
    if "front" in input_text or "recto" in input_text or "face" in input_text:
        return Card.objects.filter(recto_or_verso='R')
    if "back" in input_text or "verso" in input_text:
        return Card.objects.filter(recto_or_verso='V')
    return Card.objects.none()


def get_card(input_text):
    """
    Helper function: CARD CARD
    Given a user input_text, function returns a QuerySet of any Card objects
    with that card (Ace, Jack, Queen, King)
        Parameters:
            input_text (str): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects
    """
    input_text = input_text.lower()
    if 'ace' in input_text or input_text == 'a':
        return Card.objects.filter(card='A')
    if 'jack' in input_text or input_text == 'j':
        return Card.objects.filter(card='J')
    if 'queen' in input_text or input_text == 'q':
        return Card.objects.filter(card='Q')
    if 'king' in input_text or input_text == 'k':
        return Card.objects.filter(card='K')
    else:
        return Card.objects.none()


def get_suit(input_text):
    """
    Helper function: CARD SUIT
    Given a user input_text, function returns a QuerySet of any Card objects
    with that suit (clubs, diamonds, hearts, spades)
        Parameters:
            input_text (str): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects
    """
    input_text = input_text.lower()
    if 'club' in input_text or 'clover' in input_text or input_text == 'c':
        return Card.objects.filter(suit='C')
    if 'diamond' in input_text or input_text == 'd':
        return Card.objects.filter(suit='D')
    if 'heart' in input_text or input_text == 'h':
        return Card.objects.filter(suit='H')
    if 'spade' in input_text or input_text == 's':
        return Card.objects.filter(suit='S')
    else:
        return Card.objects.none()


def get_title(input_text):
    # TODO: how to make this helper function more sophisticated - not very flexible
    """
    Helper function: CARD TITLE
    Given a user input_text, function returns a QuerySet of any Card objects
    with that title
        Parameters:
            input_text (str): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects
    """
    input_text = input_text.lower()
    return Card.objects.filter(title__contains=input_text)


def get_date(input_text):
    """
    Helper function: CARD DATE
    Given a user input_text, function returns a
    QuerySet of any Card objects made on that date / Card objects
    where the start_date/end_date range includes the input_textted date
        Parameters:
            input_text (int): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects
    """
    if input_text.isnumeric():
        input_text = int(input_text)
        return Card.objects.filter(start_date__lte=input_text, end_date__gte=input_text)
    return Card.objects.none()


def get_maker(input_text):
    """
    Helper function: CARD MAKER
    Given a user input_text, function returns a QuerySet of any Card objects made by that maker
        Parameters:
            input_text (str): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects
    """
    input_text = input_text.lower()
    return Card.objects.filter(maker__contains=input_text)


def get_town(input_text):
    """
    Helper function: CARD TOWN
    Given a user input_text, function returns a QuerySet of any Card objects from that town
        Parameters:
            input_text (int): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects
    """
    input_text = input_text.lower()
    return Card.objects.filter(town__contains=input_text)


def get_type(input_text):
    """
    Helper function: CARD TYPE
    Given a user input_text, function returns a QuerySet of any Card objects of that type
        Parameters:
            input_text (int): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects
    """
    input_text = input_text.lower()
    return Card.objects.filter(type__contains=input_text)


def get_back_notes(input_text):
    """
    Helper function: CARD BACK NOTES
    Given a user input_text, function returns a QuerySet of any Card objects with those back notes
    (typographical letters, library card catalogue, or call and response)
        Parameters:
            input_text (int): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects
    """
    if "typographical" in input_text or "letter" in input_text:
        return Card.objects.filter(back_notes="typographical letters")
    if "library" in input_text or "card" in input_text or "catalogue" in input_text:
        return Card.objects.filter(back_notes="library card catalogue")
    if "call" in input_text or "response" in input_text:
        return Card.objects.filter(back_notes="call and response")
    else:
        return Card.objects.none()


def get_deck_name(input_text):
    """
    Helper function: DECK NAME
    Given a user input_text that is the name of a deck, function returns a QuerySet of any
    Card objects part of that deck
        Parameters:
            input_text (str): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects

    Search through database of cards: get the Deck object that has the given name, then filter
    results for Cards that belong to that Deck
    """
    input_text = input_text.lower()
    decks = Deck.objects.filter(name__contains=input_text)
    if decks.count() == 0:
        return Card.objects.none()

    results = Card.objects.none()
    for deck in decks:
        results = results | Card.objects.filter(deck=deck)
    return results


def get_deck_period(input_text):
    """
    Helper function: DECK PERIOD
    Given a user input_text, function returns a QuerySet of any Card objects
    part of the matching period (B, D, or A)
        Parameters:
            input_text (str): The user's input_text
        Returns:
            results (collection): The collection of relevant Card objects
    """
    input_text = input_text.lower()
    if 'before' in input_text or 'pre' in input_text:
        decks = Deck.objects.filter(period='B')
    elif 'after' in input_text or 'post' in input_text:
        decks = Deck.objects.filter(period='A')
    elif 'during' in input_text or 'revolution' in input_text:
        decks = Deck.objects.filter(period='D')
    else:
        decks = Deck.objects.none()  # empty QuerySet if there are no results

    if decks == Deck.objects.none():
        return decks

    results = Card.objects.none()
    for deck in decks:
        results = results | Card.objects.filter(deck=deck)
    return results


def printResults(collection):
    """
    Helper function for main testing
    Print the db IDs of all Cards in the results QuerySet
        Parameters:
            collection (collection): The collection of Cards to print
        Returns:
            None
    """

    num_results = 0
    for card in collection:
        num_results += 1
        print(card.db_id)
    print("\n", num_results, "matching results", "\n")


# """ Main function for testing """
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

    # """ *** Testing search function now *** """

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
