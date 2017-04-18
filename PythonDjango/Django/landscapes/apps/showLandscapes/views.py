from django.shortcuts import render

# Create your views here.

def index(request):
	return render(request, "showLandscapes/index.html")

def show(request, id):
    id = int(id)
    if(id > 0 and id < 11):
        print "snow"
        return render(request, "showLandscapes/show.html",  {"img":"snow"})
    elif(id > 10 and id < 21):
        print "des"
        return render(request, "showLandscapes/show.html",  {"img":"desert"})
    elif(id > 20 and id < 31):
        print "for"
        return render(request, "showLandscapes/show.html",  {"img":"forest"})
    elif(id > 30 and id < 41):
        print "v"
        return render(request, "showLandscapes/show.html",  {"img":"vines"})
    elif(id > 40 and id < 50):
        print "t"
        return render(request, "showLandscapes/show.html",  {"img":"tropic"})
    else:
        print "else"
        return render(request, "showLandscapes/show.html",  {"img":""})
