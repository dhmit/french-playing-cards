import os
import pandas as pd
import csv

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError

from app.models import Card, Deck, Tarot, ABBREVIATIONS_TO_CARD_SORT

class Command(BaseCommand):
    help = 'Populates the database from the app/data folder'

    def handle(self, *args, **options):
        try:
            self.populate_playing_cards()
            self.populate_tarot()
            self.stdout.write(self.style.SUCCESS('Successfully populated the database'))
        except Exception as e:
            raise CommandError('Failed to populate the database: "%s"' % e)

    def populate_playing_cards(self):
        print("Populating playing cards")

        data_folder = os.path.join(settings.PROJECT_ROOT, 'card_data')
        periods = ["A", "B", "D"]
        for period in periods:
            period_folder = os.path.join(data_folder, period)
            if not os.path.isdir(period_folder):
                continue

            for file_name in os.listdir(period_folder):
                if not file_name.endswith(".xlsx"):
                    continue

                deck_name = os.path.splitext(file_name)[0]
                deck_data_frame = pd.read_excel(os.path.join(period_folder, file_name))
                card_data = deck_data_frame.to_dict(orient="records")

                # create and save the deck
                deck_instance = Deck(name=deck_name,
                                     period=period,
                                     start_date=card_data[0]["Start Date"],
                                     end_date=card_data[0]["End Date"],
                                     maker=card_data[0]["Maker"],
                                     title=card_data[0]["Title"],
                                     town=card_data[0]["Town"])

                deck_instance.save()
                self.stdout.write(f'Created deck {deck_name} (id {deck_instance.id}...')

                for entry in card_data:
                    if entry["Recto or Verso"] == 'V':
                        continue

                    rank = entry['Card']
                    suit = entry["Suit"]

                    if isinstance(suit, float):
                        # pandas interprets empty columns as nan
                        suit = ""

                    # create and save each card
                    recto_img=f'{period}/{deck_name}/{rank}{suit}.1.jpeg'
                    verso_img=f'{period}/{deck_name}/{rank}{suit}.2.jpeg'

                    sort_order = ABBREVIATIONS_TO_CARD_SORT[suit]*4 + ABBREVIATIONS_TO_CARD_SORT[rank]

                    card = Card(
                        deck=deck_instance,
                        db_id=entry["DB ID"],
                        rank=rank,
                        suit=suit,
                        type=entry["Type"],
                        back_notes=entry["Back notes?"],
                        url=entry["BnF URL"],
                        recto_img=recto_img,
                        verso_img=verso_img,
                        sort_order=sort_order
                    )
                    card.save()
                    # TODO(ra): Add a verbose flag (maybe? probably don't need it...)
                    # self.stdout.write('Created card {} with id of {}'.format(card.db_id, card.id))
                    # self.stdout.write('-------')

        self.stdout.write('End of printing cards.')

    def populate_tarot(self):
        self.stdout.write('Populating tarot cards')

        tarot_cards = []
        data_folder = os.path.join(settings.PROJECT_ROOT, 'card_data')
        tarot_english_csv_path = os.path.join(data_folder, 'tarot', 'tarot_english.csv')
        tarot_francais_csv_path = os.path.join(data_folder, 'tarot', 'tarot_francais.csv')

        with open(tarot_english_csv_path, newline='', encoding='utf-8') as csvfile:
            tarot_cards = list(csv.DictReader(csvfile))

        for card in tarot_cards:
            image_string = card["number"] + card["orientation"] + ".jpeg"

            card = {k: v for k, v in card.items() if v}
            card["number"] = int(card["number"])
            if "orientation" in card:
                card["orientation"] = bool(int(card["orientation"]))


            tarot_model = Tarot(lang="en", image=image_string, **card)
            tarot_model.save()

        tarot_cards = []

        with open(tarot_francais_csv_path, newline='', encoding='utf-8') as csvfile:
            tarot_cards = list(csv.DictReader(csvfile))

        for card in tarot_cards:
            image_string = card["number"] + card["orientation"] + ".jpeg"

            card = {k: v for k, v in card.items() if v}
            card["number"] = int(card["number"])
            if "orientation" in card:
                card["orientation"] = bool(int(card["orientation"]))


            tarot_model = Tarot(lang="fr", image=image_string, **card)
            tarot_model.save()

        self.stdout.write('Done populating tarot cards')
