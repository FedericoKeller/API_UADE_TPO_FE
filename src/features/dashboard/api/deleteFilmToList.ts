import { api } from "@/lib/api-client";

export const deleteFilmFromList = (listId: string, filmId: string): Promise<void> => {
    return api.post(`/list/deleteFilm/${listId}`, { filmId })
};
