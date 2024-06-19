import { baseApi } from "@/shared/api/baseApi";

import { useQuery } from "@tanstack/react-query";
import { Genre } from "../model/types";

export const useGetGenre = () => {
  const fetcher = async () => (await baseApi.get<Genre[]>("/genres")).data;
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetcher,
  });
};
