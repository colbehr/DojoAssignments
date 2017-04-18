# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import product
# Create your views here.

def index(request):
    # product.objects.create(name="cheese",description="This is some cheese", weight=1.2, price=12.99, cost=11.99, category="fridge")
    # product.objects.create(name="Cream cheese",description="This is some more cheese", weight=1.5, price=3.99, cost=2.99, category="fridge")
    # product.objects.create(name="Shredded cheese",description="This is some Shredded cheese", weight=1.3, price=4.99, cost=2.99, category="fridge")
    prod = product.objects.all()
    for item in prod:
        print item.name
    return render(request, "first_app/index.html")
