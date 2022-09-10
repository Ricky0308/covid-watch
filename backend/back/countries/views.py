from django.http import response, HttpResponse
from django.shortcuts import render
from .models import Country
from rest_framework.views import APIView
from rest_framework.response import Response

class CountryAPI(APIView):
    def get(self, request):
        country_name = request.query_params.get('country')
        country = Country.objects.get(name__iexact=country_name)
        key = country.last_update
        c = {
            "Active Cases_text":country.active_cases[key],
            "Country_text":country.name,
            "Last Update":country.last_update,
            "New Cases_text":country.new_cases[key],
            "New Deaths_text":country.new_death[key],
            "Total Cases_text":country.total_cases[key],
            "Total Deaths_text":country.total_death[key],
            "Total Recovered_text":country.total_recovered[key]
        }
        return Response(c)


# def update_country(data):
#     # insert country information into database
#     # if country is new : create new record
#     # if data is new (different from last time) :
#     #   update each JsonField 
#     name = data.get('Country_text')
#     try:
#         country = Country.objects.get(name__iexact=name)
#         if country.last_update != data['Last Update']:
#             country.last_update = data['Last Update']
#             country.new_cases.update({data['Last Update']:data['New Cases_text']})
#             country.active_cases.update({data['Last Update']: data['Active Cases_text']})
#             country.new_death.update({data['Last Update']: data['New Deaths_text']})
#             country.total_cases.update({data['Last Update']: data['Total Cases_text']})
#             country.total_death.update({data['Last Update']: data['Total Deaths_text']})
#             country.total_recovered.update({data['Last Update']: data['Total Recovered_text']})
#             country.save() 
#     except:
#         if len(Country.objects.filter(name=name)) == 0:
#             country = Country(
#                 name=name,
#                 last_update=data['Last Update'],
#                 active_cases={data['Last Update']: data['Active Cases_text']},
#                 new_cases={data['Last Update']: data['New Cases_text']},
#                 new_death={data['Last Update']: data['New Deaths_text']},
#                 total_cases={data['Last Update']: data['Total Cases_text']},
#                 total_death={data['Last Update']: data['Total Deaths_text']},
#                 total_recovered={data['Last Update']: data['Total Recovered_text']},
#             )
#             country.save()
#         else:
#             raise Exception(f'Country with this name exists more than 1: {name}')


# def country_info_update():
#     import requests
#     api_url = 'https://covid-19.dataflowkit.com/v1'
#     data = requests.get(api_url)
#     if data.status_code == 200:
#         print('update country')
#         for country in data.json()[:-1]:
#             update_country(country)    

# def test(request):
#     country_info_update()
#     html = '<div>Hello</div>'
#     return HttpResponse(html)