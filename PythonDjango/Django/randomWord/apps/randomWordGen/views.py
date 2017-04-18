# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import random, string
# Create your views here.

def randomword(length):
    return ''.join(random.choice(string.lowercase) for i in range(length))

def index(request):
    if(not request.session.has_key('count')):
        request.session['count'] = 0
    request.session['count'] = request.session['count'] + 1

    data = {
        "count":request.session['count'],
        "word": str(randomword(random.randint(1,10)))
    }
    return render(request, 'randomWordGen/index.html',data)
