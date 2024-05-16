import { useQuery } from "@tanstack/react-query";
import { ExtractFnReturnType, ConfigOptions } from "@/lib/react-query";
import { Film } from "@/types/film.model";
import { FILMS } from "@/config";

export const getFilms = (): Promise<Film[]> => {
  //   return axios.get('/films');
  return new Promise((resolve) => {
    resolve(FILMS.results);
  });
};

export const useFilms = <T extends typeof getFilms>({ config }: ConfigOptions<T> = {}) => {
  return useQuery<ExtractFnReturnType<T>>({
    ...config,
    queryKey: ["films"],
    queryFn: () => getFilms() as Promise<ExtractFnReturnType<T>>,
  });
};
