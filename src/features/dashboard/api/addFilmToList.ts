import { api } from "@/lib/api-client";
import { Film } from "@/types/film.model";

export const addFilmToList = (listId: string, film: Film): Promise<void> => {
    return api.post(`/list/addFilm/${listId}`, { film })
};
