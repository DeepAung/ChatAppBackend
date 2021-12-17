# Generated by Django 3.2.9 on 2021-11-24 05:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_alter_message_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='room',
            options={'ordering': ['-created']},
        ),
        migrations.AlterField(
            model_name='message',
            name='room',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='messages', to='main.room'),
        ),
        migrations.AlterField(
            model_name='room',
            name='host',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='host_rooms', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='room',
            name='participants',
            field=models.ManyToManyField(blank=True, related_name='participated_rooms', to=settings.AUTH_USER_MODEL),
        ),
    ]
