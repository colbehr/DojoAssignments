# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import IntegrityError
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Trip, JoinTrip
# Create your views here.
def index(request):
    data = {
        "name": request.session['name'],
        "userTrip": Trip.objects.getUserTrips(request.session["id"]),
        "trips": Trip.objects.getTrips(10, request.session['id']),
        "joinedTrips": Trip.objects.getUserTrips(request.session['id']),
        "id": request.session['id'],
    }

    return render(request, 'travel/index.html', data)


def add(request):
    # Trip.objects.all().delete()
    # JoinTrip.objects.all().delete()
    # print "delete"
    return render(request, 'travel/add.html')

def detail(request, id):
    data = {
    "data": Trip.objects.get(id = id),
    "allUsers":Trip.objects.getTripUsers(id),
    }
    return render(request, 'travel/detail.html', data)
def joinTrip(request, id):
    try:
        Trip.objects.joinTrip(request.session['id'],id)
        return redirect("travel:index")
    except IntegrityError as e:
        print"user already part of trip"
    return redirect("travel:index")

def leaveTrip(request, id):
    Trip.objects.leaveTrip(request.session['id'],id)
    return redirect("travel:index")

def processTrip(request):
    if request.method == "POST":
        print "__________ Sending Data to Model ___________"
        response = Trip.objects.validateTrip(request.POST, request.session['id'])
        print "__________ processTrip (views.py) ___________"
        if response["status"] is False:
            print "___________ BAD TRIP ____________________"
            for error in response['errors']:
                messages.error(request, error)
            return redirect("travel:add")
        print "__________ GOOD TRIP ID",response['trip'].id,"(views.py) __________"
    return redirect("travel:index")
