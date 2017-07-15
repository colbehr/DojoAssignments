# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Name
# Create your views here.
def index(request):
	return render(request, 'first_app/index.html')

def validateUser(request):
    print "__________validateUser (views.py)"
    response = Name.objects.validateUser(request.POST)
    print "__________validateUser (views.py)"
    print response
    if response["status"] == False:
        print "Status: False"
        messages.error(request, "Username not Valid" )
        return redirect("/")
    else:
        print "________________Adding " + response['data']['username'] + " to db"
        Name.objects.create(username=response['data']['username'])
        messages.error(request, "The username you entered, " + response['data']['username'] + ", is valid! Thanks!" )
        return redirect("/success")

def success(request):
    data = {"data": Name.objects.all()}
    return render(request, 'first_app/success.html', data)
