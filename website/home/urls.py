from django.urls import path
from .views import index
from django.shortcuts import redirect

urlpatterns = [
    path("", lambda request: redirect("home:index")),
    path("", index, name="index"),
    path("about_me/", about_me, name="about_me")
]

app_name = "home"