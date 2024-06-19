import { baseApi } from "@/shared/api/baseApi";

import { useQuery } from "@tanstack/react-query";
import { Actor } from "../model/types";

export const useGetActors = () => {
  const fetcher = async () => (await baseApi.get<Actor[]>("/actors")).data;
  return useQuery({
    queryKey: ["actors"],
    queryFn: fetcher,
  });
};
