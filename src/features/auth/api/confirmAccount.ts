import { api } from "@/lib/api-client";

export type ConfirmAccountDTO = {
    token: string;
  };
  
  export const confirmAccount = (
        data: ConfirmAccountDTO
  ): Promise<{ active: boolean }> => {
    return api.put(`/auth/confirmation/${data.token}`);
  };