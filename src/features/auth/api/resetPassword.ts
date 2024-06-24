import { api } from "@/lib/api-client";
import { notifications } from "@mantine/notifications";

export type GetAccessToResetPasswordDTO = {
    token: string;
};

export type ResetPasswordDTO = {
  email: string;
  password: string;
  passwordConfirm: string;
}


export const getAccessToResetPassword = async (
    { token }: GetAccessToResetPasswordDTO
  ) => {
    return api.get<{ email: string }>(`/auth/reset/${token}`).then(
      (response) => {
        return response;
      }
    ).catch(() => {
      return null;
    });
  };


export const resetPassword = async (
    data: ResetPasswordDTO
  ): Promise<unknown> => {
    return api.post('/auth/resetPassword', data).then(
      () => {
        notifications.show({
          title: 'Contraseña cambiada',
          message: 'Tu contraseña ha sido cambiada exitosamente',
          color: 'green',
        })
        return true;
      }
    ).catch(() => {  
      return false;
    });
  };