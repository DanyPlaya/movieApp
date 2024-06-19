import { baseApi } from "@/shared/api/baseApi";
import { useQuery } from "@tanstack/react-query";
import { Film } from "../model/types";
type FilmSortProps = {
  start_year?: number;
  end_year?: number;
  director?: string;
  genre?: string;
};
export const useGetFilms = (data?: FilmSortProps) => {
  const fetcher = async () =>
    (await baseApi.get<Film[]>("/films", { params: data })).data;
  return useQuery({
    queryKey: [
      "films",
      data?.director,
      data?.end_year,
      data?.start_year,
      data?.genre,
    ],
    queryFn: fetcher,
  });
};
export const useGetFilmById = (id: number) => {
  const fetcher = async () => (await baseApi.get<Film>(`/films/${id}`)).data;
  return useQuery({
    queryKey: [`film ${id}`],
    queryFn: fetcher,
  });
};
