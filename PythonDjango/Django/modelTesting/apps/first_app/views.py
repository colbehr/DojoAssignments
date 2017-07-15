# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User,Trip
# Create your views here.


def index(request):
    response = Trip.objects.getStuff()
    trip = Trip.objects.get(dest = "dfsa")
    print response[1]
    return render(request, 'first_app/index.html', {"user":response[0],"trip":response[1],"userJ":trip.joined.all()})

def add(request):
    response = Trip.objects.addStuff()
    return redirect('/')

def addto(request):
    trip = Trip.objects.get(dest = "dfsa")
    trip.joined.add(User.objects.get(name = "da"))
    return redirect('/')

def clear(request):
    Trip.objects.clearStuff()
    return redirect('/')
