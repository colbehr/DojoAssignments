# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
# import time
import datetime
# Create your views here.

def index(request):
    time = {
        "currtime": str(datetime.datetime.now().strftime("%A, %d. %B %Y %I:%M%p"))
    }
    return render(request, 'showTime/index.html', time)
