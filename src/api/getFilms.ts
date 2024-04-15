import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { Film } from "@/types/film.model";
import { FILMS } from "@/config";

export const getFilms = (): Promise<Film[]> => {
  //   return axios.get('/films');
  return new Promise((resolve) => {
    resolve(FILMS.results);
  });
};

type QueryFnType = typeof getFilms;

type useFilmsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useFilms = ({ config }: useFilmsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["films"],
    queryFn: () => getFilms(),
  });
};
