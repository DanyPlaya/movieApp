# films/models.py

from django.db import models

class Film(models.Model):
    title = models.CharField(max_length=255)
    img = models.CharField(max_length=255, null=True, blank=True)
    release_year = models.IntegerField()
    duration = models.IntegerField()  # in minutes
    genre = models.CharField(max_length=100)
    summary = models.TextField()
    rating = models.FloatField()
    director = models.CharField(max_length=255)
    studio = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Actor(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Role(models.Model):
    actor = models.ForeignKey(Actor, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    role = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.actor.name} as {self.role} in {self.film.title}"
