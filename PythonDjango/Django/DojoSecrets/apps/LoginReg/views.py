# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
from ..secret import views
# Create your views here.

def index(request):
    if(request.session.has_key('id') and request.session["id"] != None):
        print "____________ USER LOGGED IN __________"
        return redirect("secret:index")
    else:
        return render(request, 'LoginReg/index.html')

def processLogin(request):
    if request.method == "POST":
        print "__________ Sending Data to Model ___________"
        response = User.objects.validateLogin(request.POST)
        print "__________ processLogin (views.py) ___________"
        if response["status"] is False:
            messages.error(request, "Invalid Username Or Password")
            return redirect("login:index")
        print response['user'].id
        request.session['id'] = response['user'].id
        request.session['name'] = response['user'].first_name
    return redirect("secret:index")


def processReg(request):
    if request.method == "POST":
        print "__________ Sending Data to Model ___________"
        response = User.objects.validateUser(request.POST)
        print "__________ processReg (views.py) ___________"

        if response["status"] is False:
            for error in response['errors']:
                messages.error(request, error)
            return redirect("login:index")
        #login user
        #should salt id
        print "______________ VALID USER",response['user'].id, "_______________"
        request.session['id'] = response['user'].id
        return redirect("secret:index")

def logout(request):
    request.session['id'] = None;
    return redirect("login:index")
