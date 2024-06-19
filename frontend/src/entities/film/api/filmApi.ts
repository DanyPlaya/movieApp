import { baseApi } from "@/shared/api/baseApi";
import { Film } from "../model/types";
import { useQuery } from "@tanstack/react-query";

export const useGetFilms = () => {
  const fetcher = async () => (await baseApi.get<Film[]>("/films")).data;
  return useQuery({
    queryKey: ["films"],
    queryFn: fetcher,
  });
};
