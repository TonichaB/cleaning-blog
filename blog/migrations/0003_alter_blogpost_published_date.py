# Generated by Django 4.2.16 on 2024-09-19 00:38

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_blogpost_published_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='published_date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
