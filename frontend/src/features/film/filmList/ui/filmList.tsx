import { FilmCard, films } from "@/entities/film";

export const FilmList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};
