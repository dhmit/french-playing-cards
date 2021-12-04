import django
import pandas as pd
from app.models import Card
from app.models import Deck


def populateDB(fileName, deck_name, deck_period):
    print("Reading Excel CSV file...")
    deck_DataFrame = pd.read_excel("app/data/" + fileName)
    deck_dic = deck_DataFrame.to_dict(orient="records")

    print("Creating deck named " + deck_name + "...")
    # create and save the deck
    deck_instance = Deck(name=deck_name, period=deck_period)
    deck_instance.save()
    for entry in deck_dic:
        # store some of the column values in variables for easier concatenation
        card_name = entry["Card"]
        suit_name = entry["Suit"]
        recto_or_verso = entry["Recto or Verso"]
        if entry["Recto or Verso"] == "R":
            one_or_two = "1"
        else:
            one_or_two = "2"

        # create and save each card
        card = Card(deck=deck_instance, db_id=deck_name+"."+card_name+suit_name+"."+one_or_two,
                    recto_or_verso=recto_or_verso, card=card_name, suit=suit_name,
                    title=entry["Title"], start_date=entry["Start Date"],
                    end_date=entry["End Date"], maker=entry["Maker"],
                    town=entry["Town"], type=entry["Type"], back_notes=entry["Back notes?"],
                    url=entry["BnF URL"])
        card.save()
        print("Created a card.")
        print("-------")
    print("End of printing cards.")


if __name__ == "__main__":
    # Decks that are already in database: Auvergne, Languedoc, Provence, Dauphine
    # TODO: add "title" entry to decks that are in database already
    print("")
