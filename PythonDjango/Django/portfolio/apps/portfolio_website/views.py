# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse
# the index function is called when root is visited

def index(request):
    print request.method
    return render(request, 'portfolio_website/index.html')

def testimonials(request):
	print request.method
	return render(request, 'portfolio_website/testimonials.html')
