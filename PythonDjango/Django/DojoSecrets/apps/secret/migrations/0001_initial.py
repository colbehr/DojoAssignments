# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-24 19:44
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('LoginReg', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Secret',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('secret', models.TextField(max_length=300)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='secrets', to='LoginReg.User')),
                ('user_liked', models.ManyToManyField(related_name='users', to='LoginReg.User')),
            ],
        ),
    ]
