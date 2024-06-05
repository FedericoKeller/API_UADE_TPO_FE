import { api } from "@/lib/api-client";

export const createList = (title: string): Promise<void> => {
    return api.post("/list/create", { title })
};
