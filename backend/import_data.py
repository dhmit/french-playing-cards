import django
import os
import pandas as pd
from app.models import Card
from app.models import Deck

"""
Populates the database.
    Parameters:
        fileName (str): name of the Excel CSV file
        deck_name (str): name of the Deck, also used for DB ID and image directory
        deck_period (str): either B (before), D (during), or A (after)
    Returns:
        None
"""
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
                    image=deck_period+'/' + deck_name + '/' + card_name+suit_name + "." +
                          one_or_two + '.jpeg')
        card.save()
        print ("Created card " + card.db_id)
        print("-------")
    print("End of printing cards.")


if __name__ == "__main__":

    # for i in range(6, 620):
    #     print(i)
    #     if (i < 146 or i > 193) and (i < 326 or i > 349):
    #         card = Card.objects.get(id=i)
    #         card.title = card.title.lower()
    #         card.maker = card.maker.lower()
    #         card.town = card.town.lower()
    #         card.type = card.type.lower()
    #         card.back_notes = card.back_notes.lower()
    #         # print(os.path.join('app/images', card.image))  # print out full image pathway
    #         card.save()
    #
    # for i in range(4, 41):
    #     print(i)
    #     if (i < 10 or i > 14) and i != 19 and i != 20 and i != 22 and i != 24 and i != 25 and i != 26 and i != 30 and i != 31 and i !=33:
    #         deck = Deck.objects.get(id=i)
    #         deck.name = deck.name.lower()


    print("Success")
