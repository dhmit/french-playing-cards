import os
import pandas as pd

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError

from app.models import Card, Deck, Tarot

class Command(BaseCommand):
    help = 'Populates the database from the app/data folder'

    def handle(self, *args, **options):
        try:
            self.populate_db()
            self.stdout.write(self.style.SUCCESS('Successfully populated the database'))
        except Exception as e:
            raise CommandError('Failed to populate the database: "%s"' % e)

    def populate_db(self):
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
                self.stdout.write('Reading Excel CSV file...')
                deck_data_frame = pd.read_excel(os.path.join(period_folder, file_name))
                card_data = deck_data_frame.to_dict(orient="records")

                # create and save the deck
                deck_instance = Deck(name=deck_name, period=period)
                deck_instance.save()
                self.stdout.write('Created deck named {} and id of {}...'.format(deck_name, deck_instance.id))

                for entry in card_data:
                    if entry["Recto or Verso"] == 'V':
                        continue

                    card_name = entry['Card']
                    suit_name = entry["Suit"]

                    if isinstance(suit_name, float):
                        # pandas interprets empty columns as nan
                        suit_name = ""

                    # create and save each card
                    recto_img=f'{period}/{deck_name}/{card_name}{suit_name}.1.jpeg'
                    verso_img=f'{period}/{deck_name}/{card_name}{suit_name}.2.jpeg'

                    card = Card(
                        deck=deck_instance,
                        db_id=entry["DB ID"],
                        card=card_name,
                        suit=suit_name,
                        title=entry["Title"],
                        start_date=entry["Start Date"],
                        end_date=entry["End Date"],
                        maker=entry["Maker"],
                        town=entry["Town"],
                        type=entry["Type"],
                        back_notes=entry["Back notes?"],
                        url=entry["BnF URL"],
                        recto_img=recto_img,
                        verso_img=verso_img,
                    )
                    card.save()
                    self.stdout.write('Created card {} with id of {}'.format(card.db_id, card.id))
                    self.stdout.write('-------')

        self.stdout.write('End of printing cards.')

    def populate_tarot(self):
        tarot_cards = []
        data_folder = os.path.join(settings.PROJECT_ROOT, 'card_data')
        tarot_english_csv_path =  os.path.join(data_folder, 'tarot', 'tarot_english.csv')
        tarot_francais_csv_path =  os.path.join(data_folder, 'tarot', 'tarot_francais.csv')

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
