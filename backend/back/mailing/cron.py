from django.core.mail import send_mail
from django.conf import settings


def test_job():
    send_mail(
        subject='Cron', 
        message='message',
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[settings.RECIPIENT_ADDRESS]
    )
    print('This is a test cron job!!!!!!')