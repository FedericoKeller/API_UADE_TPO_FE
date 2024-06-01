import { useQuery } from "@tanstack/react-query";
import { ConfigOptions, ExtractFnReturnType } from "@/lib/react-query";
import { api } from "@/lib/api-client";
import { Genre } from "tmdb-ts";

export const getGenres = (): Promise<Genre[]> => {
  return api.get("/movie/genres");
};


export const useGenres = <T extends typeof getGenres>({ config }: ConfigOptions<T> = {}) => {
  return useQuery<ExtractFnReturnType<T>>({
    ...config,
    queryKey: ["genres"],
    queryFn: () => getGenres() as Promise<ExtractFnReturnType<T>>,
  });
};
