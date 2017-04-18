# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Book
# Create your views here.

def index(request):
    # Book.objects.create(title="A User's Guide to Measure Theoretic Probability", author="David Pollard", category="book")
    # Book.objects.create(title="Community Development: A Critical Approach", author="Margaret Ledwith", category="book")
    # Book.objects.create(title="Community Development: An Approach", author="Margaret Leedwith", category="book")
    # Book.objects.create(title="Community Development", author="Tom Ledwith", category="book")
    # Book.objects.create(title="Community Approach", author="Margaret Jones", category="book")
    book = Book.objects.all()
    for item in book:
        print item.title
    return render(request, "first_app/index.html")
