# import pandas as pd
import csv
from app.models import Tarot
# from app.models import Card
# from app.models import Deck


# def populateDB(fileName, deck_name, deck_period):
#     """
#     Populates the database.
#         Parameters:
#             fileName (str): name of the Excel CSV file
#             deck_name (str): name of the Deck, also used for DB ID and image directory
#             deck_period (str): either B (before), D (during), or A (after)
#         Returns:
#             None
#     """
#     print("Reading Excel CSV file...")
#     deck_DataFrame = pd.read_excel("app/data/" + fileName)
#     deck_dic = deck_DataFrame.to_dict(orient="records")

#     # create and save the deck
#     deck_instance = Deck(name=deck_name, period=deck_period)
#     deck_instance.save()
#     print("Created deck named " + deck_name + " and id of " + str(deck_instance.id) + "...")

#     for entry in deck_dic:
#         # store some of the column values in variables for easier concatenation
#         card_name = entry['Card']
#         suit_name = entry["Suit"]
#         recto_or_verso = entry["Recto or Verso"]
#         if entry["Recto or Verso"] == "R":
#             one_or_two = "1"
#         else:
#             one_or_two = "2"

#         # create and save each card
#         # db_id = deck_name + "." + card_name + suit_name + "." + one_or_two,
#         card = Card(deck=deck_instance, db_id=entry["DB ID"],
#                     recto_or_verso=recto_or_verso, card=card_name, suit=suit_name,
#                     title=entry["Title"], start_date=entry["Start Date"],
#                     end_date=entry["End Date"], maker=entry["Maker"],
#                     town=entry["Town"], type=entry["Type"], back_notes=entry["Back notes?"],
#                     url=entry["BnF URL"],
#                     image=deck_period + '/' + deck_name + '/' + card_name + suit_name +
#                           "." + one_or_two + '.jpeg')
#         card.save()
#         print("Created card " + card.db_id + " with id of " + str(card.id))
#         print("-------")
#     print("End of printing cards.")

# to populate database, open terminal and run:
# 1. `cd backend`
# 2. `python manage.py shell`
# 3. `import import_data`
# 4. `import_data.populate_tarot("app/data/tarot/tarot_english.csv")` 

def populate_tarot(filename):
    print("Reading csv...")
    tarot_cards = []

    with open(filename, newline='') as csvfile:
        tarot_cards = list(csv.DictReader(csvfile))

    print("Creating models...")
    
    for card in tarot_cards:
        image_string = card["number"] + card["orientation"] + ".jpeg"

        card = {k: v for k, v in card.items() if v}
        card["number"] = int(card["number"])
        if "orientation" in card:
            card["orientation"] = bool(int(card["orientation"]))

        print(card)

        tarot_model = Tarot(lang="en", image=image_string, **card)
        print(tarot_model.__dict__)
        tarot_model.save()
        print("Created " + tarot_model.lang + " card " + tarot_model.card)
        print("-------")

if __name__ == "__main__":
    populate_tarot("backend/app/data/tarot/tarot_english.csv")
    print("Success")