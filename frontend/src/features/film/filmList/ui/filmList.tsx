import { Film, FilmCard, useGetFilms } from "@/entities/film";
import { useState } from "react";
import { useDebounce } from "use-debounce";
type FilmListProps = {
  searchValue: string;
  films: Film[];
};
export const FilmList = (props: FilmListProps) => {
  const { searchValue, films } = props;
  // const { data: films } = useGetFilms();
  const filteredFilms = films?.filter((film) =>
    film.title
      .trim()
      .toLowerCase()
      .includes(searchValue.trim().toLocaleLowerCase())
  );
  return (
    <div className="grid grid-cols-4 gap-4">
      {filteredFilms?.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};
