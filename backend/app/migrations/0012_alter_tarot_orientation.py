# Generated by Django 4.1.3 on 2023-04-23 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_tarot'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tarot',
            name='orientation',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]