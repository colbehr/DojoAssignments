# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Course
# Create your views here.
def index(request):
    data = {"data": Course.objects.all()}
    return render(request, 'first_app/index.html', data)

def process(request):
    print Course.objects.create(title=request.POST["title"],description=request.POST["description"])
    return redirect("/")

def delete(request, id):
    data = {"data": Course.objects.get(id = id)}
    return render(request, "first_app/delete.html", data)


def deleteConf(request):
    Course.objects.filter(id = request.POST["id"]).delete()
    return redirect("/")
