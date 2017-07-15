# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    data = {
        "name": request.session['name']
    }
    return render(request, 'books/index.html', data)
