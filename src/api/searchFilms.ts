import { Film } from "@/types/film.model";
import { api } from "@/lib/api-client";
import { SearchOption } from "@/features/misc/components/Menu/SearchMenu/MenuSearch";

export const searchFilms = (param: SearchOption, searchTerm: string): Promise<Film[]> => {
        return api.put("/movie/search", { param, searchTerm })
};

