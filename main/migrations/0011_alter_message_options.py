# Generated by Django 3.2.9 on 2021-11-30 02:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_auto_20211124_1235'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'ordering': ['created']},
        ),
    ]
