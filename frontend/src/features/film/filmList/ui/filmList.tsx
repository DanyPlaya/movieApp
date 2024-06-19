import { FilmCard, useGetFilms } from "@/entities/film";

export const FilmList = () => {
  const { data: films } = useGetFilms();

  return (
    <div className="grid grid-cols-4 gap-4">
      {films?.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};
