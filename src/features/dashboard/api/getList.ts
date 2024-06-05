import { api } from "@/lib/api-client";
import { ConfigOptions, ExtractFnReturnType } from "@/lib/react-query";
import { List } from "@/types/list.model";
import { useQuery } from "@tanstack/react-query";

export const getList = (listId: number): Promise<List> => {
    return api.get(`/list/listInfo/${listId}`);
};

export const useList = <T extends typeof getList>({ config, data }: ConfigOptions<T> = {}) => {
    return useQuery<ExtractFnReturnType<T>>({
      ...config,
      queryKey: ["film", data?.listId],
      queryFn: () => getList(data!.listId as number) as Promise<ExtractFnReturnType<T>>,
    });
  };