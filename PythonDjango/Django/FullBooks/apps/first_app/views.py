# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import book
# Create your views here.

def index(request):
    print book.objects.all()
    data = {
        "books": book.objects.all()
    }
    return render(request, 'first_app/index.html', data)

def addBook(request):
    print book.objects.create(title=request.POST["title"],author=request.POST["author"], category=request.POST["cat"])

    return redirect('/')
