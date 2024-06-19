import { useGetFilms } from "@/entities/film";
import { FilmList } from "@/features/film";
import { Input } from "@/shared/ui";
import { FilmFilter } from "@/widgets/filmFilter";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export const MainPage = () => {
  const [searchValue, setSeacrhValue] = useState("");
  const [value] = useDebounce(searchValue, 500);
  const [filters, setFilters] = useState<{
    start_year?: number;
    end_year?: number;
    director?: string;
    genre?: string;
  }>();

  const { data: films } = useGetFilms({
    director: filters?.director,
    end_year: filters?.end_year === 0 ? undefined : filters?.end_year,
    start_year: filters?.start_year === 0 ? undefined : filters?.start_year,
    genre: filters?.genre,
  });
  console.log(filters);
  return (
    <div className="p-4 grid gap-4 ">
      <div className="flex gap-8">
        <Input
          value={searchValue}
          onChange={(e) => setSeacrhValue(e.target.value)}
        />
        <FilmFilter setFilterData={setFilters} />
      </div>
      {films ? (
        <FilmList films={films || []} searchValue={value} />
      ) : (
        <div>Пусто</div>
      )}
    </div>
  );
};
