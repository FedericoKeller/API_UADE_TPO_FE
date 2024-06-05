import { api } from "@/lib/api-client";

export const deleteList = (listId: number): Promise<void> => {
    return api.post(`/list/delete/${listId}`);
};
