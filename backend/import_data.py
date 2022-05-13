import pandas as pd
from app.models import Card
from app.models import Deck


def populateDB(fileName, deck_name, deck_period):
    """
    Populates the database.
        Parameters:
            fileName (str): name of the Excel CSV file
            deck_name (str): name of the Deck, also used for DB ID and image directory
            deck_period (str): either B (before), D (during), or A (after)
        Returns:
            None
    """
    print("Reading Excel CSV file...")
    deck_DataFrame = pd.read_excel("app/data/" + fileName)
    deck_dic = deck_DataFrame.to_dict(orient="records")

    # create and save the deck
    deck_instance = Deck(name=deck_name, period=deck_period)
    deck_instance.save()
    print("Created deck named " + deck_name + " and id of " + str(deck_instance.id) + "...")

    for entry in deck_dic:
        # store some of the column values in variables for easier concatenation
        card_name = entry['Card']
        suit_name = entry["Suit"]
        recto_or_verso = entry["Recto or Verso"]
        if entry["Recto or Verso"] == "R":
            one_or_two = "1"
        else:
            one_or_two = "2"

        # create and save each card
        # db_id = deck_name + "." + card_name + suit_name + "." + one_or_two,
        card = Card(deck=deck_instance, db_id=entry["DB ID"],
                    recto_or_verso=recto_or_verso, card=card_name, suit=suit_name,
                    title=entry["Title"], start_date=entry["Start Date"],
                    end_date=entry["End Date"], maker=entry["Maker"],
                    town=entry["Town"], type=entry["Type"], back_notes=entry["Back notes?"],
                    url=entry["BnF URL"],
                    image=deck_period + '/' + deck_name + '/' + card_name + suit_name +
                          "." + one_or_two + '.jpeg')
        card.save()
        print("Created card " + card.db_id + " with id of " + str(card.id))
        print("-------")
    print("End of printing cards.")


if __name__ == "__main__":
    dauphine = Deck.objects.get(id=6)
    for card in dauphine:
        if card.recto_or_verso == 'R':
            one_or_two = '1'
        else:
            one_or_two = '2'
        card.image = 'B/Dauphine/' + card.card + card.suit + '.' + one_or_two + '.jpeg'
    print("Success")
