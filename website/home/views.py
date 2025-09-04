from django.shortcuts import render
from .models import Project, ProjectTag, Timeline


def index(request):
    grouped_projects = Project.objects.all().order_by('-created_on')
    
    return render(request, "home/index.html", {
        'grouped_projects': grouped_projects
    })

def about_me(request):
    timeline_sections = Timeline.objects.all().order_by('created_on')
    return render(request, "home/about_me.html", {
        'timeline_sections': timeline_sections
    })

def test(request):
    return render(request, "home/test.html", {
        
    })

def coming_soon(request):
    return render(request, "home/coming_soon.html", {
        
    })