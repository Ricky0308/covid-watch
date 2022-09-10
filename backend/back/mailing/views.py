from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.conf import settings

@api_view(['POST'])
def from_contactform(request):
    send_mail(
        subject='Contact from', 
        message=request.data.get('message'),
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[settings.RECIPIENT_ADDRESS]
    )
    return Response({'message':'from send_mail'})