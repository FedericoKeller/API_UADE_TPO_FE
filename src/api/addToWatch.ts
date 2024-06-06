import { api } from "@/lib/api-client";
import { Film } from "@/types/film.model";

export const addFilmToWatch = (film: Film): Promise<void> => {
    return api.post(`/list/toggleToWatch`, { film })
};
