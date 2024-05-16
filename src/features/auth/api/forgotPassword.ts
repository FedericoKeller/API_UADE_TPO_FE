import { api } from "@/lib/api-client";

export type ForgotPasswordDTO = {
    email: string;
  };
  
  export const forgotPassword = (
    data: ForgotPasswordDTO
  ): Promise<unknown> => {
    return api.post('/auth/forgot-password', data);
  };
  