# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from datetime import datetime
from django.db.models import Count
from ..LoginReg.models import User
# Create your models here.


class UserManager(models.Manager):
    def validateTrip(self, postData, id):
        print "__________ validateUser (models.py)___________"
        response = {}
        response["status"] = True
        response["errors"] = []
        response["data"] = postData
        userObj = User.objects.get(id=id)
        if not postData['dest'] or not postData['desc'] or not postData['dateTo'] or not postData['dateFrom']:
            response["status"] = False
            response['errors'].append("Please fill out all Fields")
            return response
        date_format = "%Y-%m-%d"
        start = datetime.strptime(str(postData['dateFrom']), date_format)
        end = datetime.strptime(str(postData['dateTo']), date_format)
        now = datetime.strptime(str(datetime.now()), "%Y-%m-%d %H:%M:%S.%f")
        if start < now or end < now or start > end:
            response["status"] = False
            response['errors'].append("Please enter valid dates in the future")
        if response['status'] is True:
            response['trip'] = Trip.objects.create(user=userObj, dest=response['data']['dest'], desc=response['data']
                                                   ['desc'], dateFrom=response['data']['dateFrom'], dateTo=response['data']['dateTo'])
            JoinTrip.objects.create(user=userObj, trip=response['trip'])
        return response

    #gets trips and excludes user
    def getTrips(self, num, id):
        return Trip.objects.all().order_by('-created_at')

    #gets all trips by user id
    def getUserTrips(self, id):
        return JoinTrip.objects.filter(user__id=id)

    #gets all users on a trip
    def getTripUsers(self, tripid):
        return JoinTrip.objects.filter(trip__id=tripid)

    #joins a trip by user id and trip id
    def joinTrip(self, userid, tripid):
        obj = JoinTrip.objects.create(user=User.objects.get(
            id=userid), trip=Trip.objects.get(id=tripid))
        return True

    #leaves a trip by user id
    def leaveTrip(self, userid, tripid):
        JoinTrip.objects.filter(user=User.objects.get(
            id=userid), trip=Trip.objects.get(id=tripid)).delete()
        return True


class Trip(models.Model):
    user = models.ForeignKey(User, related_name="trips")
    dest = models.CharField(max_length=50)
    desc = models.TextField(max_length=100)
    dateFrom = models.DateTimeField()
    dateTo = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()


class JoinTrip(models.Model):
    user = models.ForeignKey(User)
    trip = models.ForeignKey(Trip)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        unique_together = ["user", "trip"]
        
    objects = UserManager()
