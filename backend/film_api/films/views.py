# films/views.py

from rest_framework import viewsets
from .models import Film, Actor, Role
from .serializers import FilmSerializer, ActorSerializer
from django.http import JsonResponse
from django.db.models import Count
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

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
            queryset = queryset.filter(genre=genre)
        
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

@api_view(['GET'])
def actors_by_film(request, film_id):
    try:
        roles = Role.objects.filter(film_id=film_id)
        actors = [role.actor for role in roles]
        serializer = ActorSerializer(actors, many=True)
        return Response(serializer.data)
    except Role.DoesNotExist:
        return Response({"message": "Фильм не найден"}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
def films_by_actor(request, actor_id):
    try:
        roles = Role.objects.filter(actor_id=actor_id)
        films = [role.film for role in roles]
        serializer = FilmSerializer(films, many=True)
        return Response(serializer.data)
    except Role.DoesNotExist:
        return Response({"message": "Актер не найден"}, status=status.HTTP_404_NOT_FOUND)
    

def directors_list(request):
    directors = Film.objects.values('director').annotate(count=Count('id'))
    director_list = [{'name': item['director'], 'film_count': item['count']} for item in directors]
    return JsonResponse(director_list, safe=False)

def genres_list(request):
    genres = Film.objects.values_list('genre', flat=True).distinct()
    return JsonResponse(list(genres), safe=False)