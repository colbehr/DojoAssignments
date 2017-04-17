# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

def index(request):
  return render(request, 'realPortfolio_website/index.html')

def page1(request):
  return render(request, 'realPortfolio_website/page1.html')

def page2(request):
  return render(request, 'realPortfolio_website/page2.html')

def page3(request):
  return render(request, 'realPortfolio_website/page3.html')
