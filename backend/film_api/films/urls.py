# film_api/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from films import views

router = DefaultRouter()
router.register(r'films', views.FilmViewSet)
router.register(r'actors', views.ActorViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('directors/', views.directors_list, name='directors-list'),
    path('genres/', views.genres_list, name='genres-list'),
    path('films/<int:film_id>/actors/', views.actors_by_film, name='actors-by-film'),
    path('actors/<int:actor_id>/films/', views.films_by_actor, name='films-by-actor'),
]