from django.shortcuts import render


def index(request):
    return render(request, "home/index.html", {

    })

def about_me(request):
    return render(request, "home/about_me.html", {

    })

def test(request):
    return render(request, "home/test.html", {
        
    })