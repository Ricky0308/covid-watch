from django.urls import path, include
from .views import CountryAPI

urlpatterns = [
    path('', CountryAPI.as_view()),
]