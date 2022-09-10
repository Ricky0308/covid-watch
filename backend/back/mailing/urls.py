from django.urls import path, include
from .views import from_contactform

urlpatterns = [
    path('', from_contactform),
]