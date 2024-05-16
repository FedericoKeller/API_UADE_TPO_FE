import { useQuery } from "@tanstack/react-query";
import { ConfigOptions, ExtractFnReturnType } from "@/lib/react-query";
import { GENRES } from "@/test/genres.mock";
import { Genre } from "@/types/genres.model";

export const getGenres = (): Promise<Genre[]> => {
  //   return axios.get('/genres');
  return new Promise((resolve) => {
    resolve(GENRES.genres);
  });
};


export const useGenres = <T extends typeof getGenres>({ config }: ConfigOptions<T> = {}) => {
  return useQuery<ExtractFnReturnType<T>>({
    ...config,
    queryKey: ["genres"],
    queryFn: () => getGenres() as Promise<ExtractFnReturnType<T>>,
  });
};
