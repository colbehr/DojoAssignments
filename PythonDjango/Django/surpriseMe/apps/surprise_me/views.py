from django.shortcuts import render
import random

VALUES = ['populate this list with various strings','strings here', "these are strings", 'some more strings', 'last string', 'more strings', 'strings go here', "these are some strings"]
# Create your views here.

def index(request):
    return render(request, "surprise_me/index.html")

def results(request):
    data = {}
    for x in range(0, int(request.POST["number"])):
        data[str(x)] = VALUES[random.randint(0,len(VALUES)-1)]
    print data
    return render(request, "surprise_me/results.html", {'data':data})
