import { api } from "@/lib/api-client";
import { ConfigOptions, ExtractFnReturnType } from "@/lib/react-query";
import { Film } from "@/types/film.model";
import { useQuery } from "@tanstack/react-query";

export const getFilm = (id: string): Promise<Film> => {
    return api.get(`/movie/byId/${id}`);
};


export const useFilm = <T extends typeof getFilm>({ config, data }: ConfigOptions<T> = {}) => {
    return useQuery<ExtractFnReturnType<T>>({
      ...config,
      queryKey: ["film", data?.id],
      queryFn: () => getFilm(data!.id as string) as Promise<ExtractFnReturnType<T>>,
    });
  };