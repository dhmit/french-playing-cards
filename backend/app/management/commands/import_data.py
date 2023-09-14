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
            self.populate_cartomancy()
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
                deck = Deck(name=deck_name,
                            period=period,
                            start_date=card_data[0]["Start Date"],
                            end_date=card_data[0]["End Date"],
                            maker=card_data[0]["Maker"],
                            title=card_data[0]["Title"],
                            town=card_data[0]["Town"])

                deck.save()
                self.stdout.write(f'Created deck {deck_name} (id {deck.id}...')

                for entry in card_data:
                    rank = entry['Card']
                    suit = entry["Suit"]

                    if isinstance(suit, float):
                        # pandas interprets empty columns as nan
                        suit = ""

                    # create and save each card
                    recto_img = f'{period}/{deck_name}/{rank}{suit}.1.jpeg'

                    sort_order = ABBREVIATIONS_TO_CARD_SORT[suit]*4 + ABBREVIATIONS_TO_CARD_SORT[rank]

                    if entry["Recto or Verso"] == 'R':
                        card = Card(
                            deck=deck,
                            rank=rank,
                            suit=suit,
                            back_notes=entry["Back notes?"],
                            url=entry["BnF URL"],
                            recto_img=recto_img,
                            sort_order=sort_order
                        )
                        card.save()

                    elif entry["Recto or Verso"] == 'V':
                        card = Card.objects.get(
                            deck=deck,
                            rank=rank,
                            suit=suit
                        )
                        card.verso_img = f'{period}/{deck_name}/{rank}{suit}.2.jpeg'
                        card.save()


                    # self.stdout.write('Created card {} with id of {}'.format(card.db_id, card.id))
                    # self.stdout.write('-------')

        self.stdout.write('End of printing cards.')


    def populate_cartomancy(self):
        self.stdout.write('Populating cartomancy cards')

        cartomancy_xlsx_path = os.path.join(settings.PROJECT_ROOT, 'card_data', 'cartomancy.xlsx')
        cartomancy_data_df = pd.read_excel(cartomancy_xlsx_path)
        cartomancy_data = cartomancy_data_df.to_dict(orient='records')

        for card in cartomancy_data:
            orientation = card["orientation"]
            image_string = f"{card['number']}_{orientation}.jpeg"

            card = {k: v for k, v in card.items() if pd.notna(v)}
            card["number"] = int(card["number"])
            if "orientation" in card:
                card["orientation"] = True if card["orientation"] == 'up' else False

            tarot_model = Tarot(image=image_string, **card)
            tarot_model.save()

        self.stdout.write('Done populating cartomancy cards')
