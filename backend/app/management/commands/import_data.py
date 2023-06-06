
from django.core.management.base import BaseCommand, CommandError
import pandas as pd
import os
from app.models import Card, Deck

class Command(BaseCommand):
    help = 'Populates the database from the app/data folder'

    def handle(self, *args, **options):
        try:
            self.populate_db()
            self.stdout.write(self.style.SUCCESS('Successfully populated the database'))
        except Exception as e:
            raise CommandError('Failed to populate the database: "%s"' % e)

    def populate_db(self):
        data_folder = "app/data/"
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
                    card_name = entry['Card']
                    suit_name = entry["Suit"]
                    if isinstance(suit_name, float):
                        # pandas interprets empty columns as nan
                        suit_name = ""
                    recto_or_verso = entry["Recto or Verso"]
                    one_or_two = "1" if entry["Recto or Verso"] == "R" else "2"

                    # create and save each card
                    image_path = period + '/' + deck_name + '/' + card_name + suit_name + "." + one_or_two + '.jpeg'

                    card = Card(deck=deck_instance, 
                                db_id=entry["DB ID"],
                                recto_or_verso=recto_or_verso, 
                                card=card_name, 
                                suit=suit_name,
                                title=entry["Title"], start_date=entry["Start Date"],
                                end_date=entry["End Date"], maker=entry["Maker"],
                                town=entry["Town"], type=entry["Type"], back_notes=entry["Back notes?"],
                                url=entry["BnF URL"],
                                image=image_path)
                    card.save()
                    self.stdout.write('Created card {} with id of {}'.format(card.db_id, card.id))
                    self.stdout.write('-------')

        self.stdout.write('End of printing cards.')
