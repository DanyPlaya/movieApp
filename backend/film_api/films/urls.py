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
]