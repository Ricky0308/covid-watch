FROM python:3 
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
COPY ./back/ /app/
CMD ["/bin/sh"]
# CMD python manage.py runserver 127.0.0.1:8000


# commands 
# docker image build -t sample/django:latest .
# docker container run -it -p 8000:8000 --name django -v ${PWD}/back:/app sample/django:latest
# docker container run -it -p 8000:8000 --name django sample/django:latest
# docker container start -i django
# docker container start -i covid-watch-backend-1

# command for kill 
# docker container prune -f
# docker images 
# docker image rmi 