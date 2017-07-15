# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from models import Secret
# Create your views here.
import datetime

def index(request):
  print "_________ Secret (Views.py) ____________"
  if(request.session.has_key('id') and request.session["id"] != None):
    print "____________ USER LOGGED IN __________"
    data = {
    "name": request.session['name'],
    'data': Secret.objects.getSecret(10),
    }
    return render(request, 'secret/index.html', data)
  else:
    print "____________ USER NOT LOGGED IN __________"
    return redirect("login:index")


def like(request, id):
    print "sending like on", id
    response = Secret.objects.addLike(id , request.session["id"])
    return redirect("secret:index")

def post(request):
    if request.method == "POST":
        print "__________ Sending Data to Model ___________"
        response = Secret.objects.validateSecret(request.POST, request.session["id"])
        print "__________ post (secret)(views.py) ___________"
        if response["status"] is False:
            messages.error(request, "Invalid Secret")
            return redirect("secret:index")
    return redirect("secret:index")


def pop(request):
  return redirect("secret:index")
