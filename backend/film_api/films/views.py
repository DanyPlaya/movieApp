# films/views.py

from rest_framework import viewsets
from .models import Film, Actor
from .serializers import FilmSerializer, ActorSerializer
from django.http import JsonResponse
from django.db.models import Count

class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer

    def get_queryset(self):
        queryset = Film.objects.all()

        # Получаем параметры запроса
        genre = self.request.query_params.get('genre')
        start_year = self.request.query_params.get('start_year')
        end_year = self.request.query_params.get('end_year')
        director = self.request.query_params.get('director')
        studio = self.request.query_params.get('studio')

        # Применяем фильтры
        if genre:
            queryset = queryset.filter(genre__icontains=genre)
        
        if start_year and end_year:
            queryset = queryset.filter(release_year__gte=start_year, release_year__lte=end_year)
        
        if director:
            queryset = queryset.filter(director__icontains=director)
        
        if studio:
            queryset = queryset.filter(studio__icontains=studio)

        return queryset

class ActorViewSet(viewsets.ModelViewSet):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer


def directors_list(request):
    directors = Film.objects.values('director').annotate(count=Count('id'))
    director_list = [{'name': item['director'], 'film_count': item['count']} for item in directors]
    return JsonResponse(director_list, safe=False)

def genres_list(request):
    genres = Film.objects.values_list('genre', flat=True).distinct()
    return JsonResponse(list(genres), safe=False)