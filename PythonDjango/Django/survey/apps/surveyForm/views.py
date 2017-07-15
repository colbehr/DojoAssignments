 # -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.

def index(request):
	return render(request, 'surveyForm/index.html')

def process(request):
    request.session["name"] = request.POST['name']
    request.session["loc"] = request.POST['loc']
    request.session["lang"] = request.POST['lang']
    request.session["comment"] = request.POST['comment']
    return redirect("/result")

def result(request):
    data = {
        "name":request.session["name"],
        "loc":request.session["loc"],
        "lang":request.session["lang"],
        "comment":request.session["comment"]
    }
    return render(request, 'surveyForm/result.html', data)
