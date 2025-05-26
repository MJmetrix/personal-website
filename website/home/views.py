from django.shortcuts import render


def home(request):
    return render(request, "home/index.html", {

    })

def about_me(request):
    return render(request, "home/about_me.html", {

    })