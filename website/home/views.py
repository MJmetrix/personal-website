from django.shortcuts import render
from .models import Project, ProjectCategory


def index(request):
    projects = Project.objects.all().order_by('-created_on')
    categories = ProjectCategory.objects.all().order_by('name')

    grouped_projects = {
        category: projects.filter(category=category) for category in categories
    }
    
    return render(request, "home/index.html", {
        'grouped_projects': grouped_projects
    })

def about_me(request):
    return render(request, "home/about_me.html", {

    })

def test(request):
    return render(request, "home/test.html", {
        
    })