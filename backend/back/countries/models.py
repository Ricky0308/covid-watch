from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=75)
    last_update = models.CharField(max_length=50)
    active_cases = models.JSONField()
    new_cases = models.JSONField()
    new_death = models.JSONField()
    total_cases = models.JSONField()
    total_death = models.JSONField()
    total_recovered = models.JSONField()

    def __str__(self):
        return self.name