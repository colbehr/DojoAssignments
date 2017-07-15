# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from datetime import datetime
# Create your models here.

class UserManager(models.Manager):
    def addStuff(self):
        user1 = User.objects.create(name="da", username="da", password="da")
        response = Trip.objects.create(user=user1, dest="dfsa", desc="fsdfsd", dateFrom=datetime.now(), dateTo=datetime.now())

        return "postData"
    def getStuff(self):
        print User.objects.all(),Trip.objects.all()
        return [User.objects.all(), Trip.objects.all()]

    def clearStuff(self):
        Trip.objects.all().delete()
        User.objects.all().delete()

class User(models.Model):
    name = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Trip(models.Model):
    user = models.ForeignKey(User, related_name="trips")
    dest = models.CharField(max_length=50)
    desc = models.TextField(max_length=100)
    dateFrom = models.DateTimeField()
    dateTo = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    joined = models.ManyToManyField(User)

    objects = UserManager()
