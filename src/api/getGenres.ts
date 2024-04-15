import { useQuery } from "@tanstack/react-query";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { GENRES } from "@/config/mocks/genres.mock";
import { Genre } from "@/types/genres.model";

export const getGenres = (): Promise<Genre[]> => {
  //   return axios.get('/genres');
  return new Promise((resolve) => {
    resolve(GENRES.genres);
  });
};

type QueryFnType = typeof getGenres;

type useGenreOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useGenres = ({ config }: useGenreOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["genres"],
    queryFn: () => getGenres(),
  });
};
