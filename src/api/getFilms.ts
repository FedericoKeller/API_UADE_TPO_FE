import { useQuery } from "@tanstack/react-query";
import { ExtractFnReturnType, ConfigOptions } from "@/lib/react-query";
import { Film } from "@/types/film.model";
import { api } from "@/lib/api-client";

export const getPopularFilms = (): Promise<Film[]> => {
    return api.get("/movie/popular");
};

export const useFilms = <T extends typeof getPopularFilms>({ config }: ConfigOptions<T> = {}) => {
  return useQuery<ExtractFnReturnType<T>>({
    ...config,
    queryKey: ["films"],
    queryFn: () => getPopularFilms() as Promise<ExtractFnReturnType<T>>,
  });
};
