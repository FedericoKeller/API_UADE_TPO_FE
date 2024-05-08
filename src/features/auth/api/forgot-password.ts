import axios from "axios";

export type ForgotPasswordDTO = {
    email: string;
  };
  
  export const registerWithEmailAndPassword = (
    data: ForgotPasswordDTO
  ): Promise<unknown> => {
    return axios.post('/auth/forgot-password', data);
  };