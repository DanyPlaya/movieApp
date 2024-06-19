import { baseApi } from "@/shared/api/baseApi";

import { useQuery } from "@tanstack/react-query";
import { Director } from "../model/types";

export const useGetDirectors = () => {
  const fetcher = async () =>
    (await baseApi.get<Director[]>("/directors")).data;
  return useQuery({
    queryKey: ["directors"],
    queryFn: fetcher,
  });
};
