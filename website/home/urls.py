from django.urls import path
from .views import index, about_me, test, coming_soon
from django.shortcuts import redirect

urlpatterns = [
    path("", lambda request: redirect("home:index")),
    path("homepage/", index, name="index"),
    path("aboutme/", about_me, name="about_me"),
    path("test/", test, name="test"),
    path("comingsoon/", coming_soon, name="coming_soon")
]

app_name = "home"