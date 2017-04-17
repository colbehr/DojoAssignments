from django.shortcuts import render, redirect

# Create your views here.


def index(request):
    return render(request, "Disappearing_Ninja/index.html")


def color(request, id=0):
    if(id == "blue"):
        return render(request, "Disappearing_Ninja/colors.html", {"color": "leonardo"})
    elif(id == "orange"):
        return render(request, "Disappearing_Ninja/colors.html", {"color": "michelangelo"})
    elif(id == "red"):
        return render(request, "Disappearing_Ninja/colors.html", {"color": "raphael"})
    elif(id == "purple"):
        return render(request, "Disappearing_Ninja/colors.html", {"color": "donatello"})
    else:
        return render(request, "Disappearing_Ninja/colors.html", {"color": "notapril"})
