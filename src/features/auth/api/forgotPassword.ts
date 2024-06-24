import { api } from "@/lib/api-client";
import { notifications } from "@mantine/notifications";

export type ForgotPasswordDTO = {
    email: string;
  };
  
  export const forgotPassword = async (
    data: ForgotPasswordDTO
  ): Promise<unknown> => {
    return api.post('/auth/sendResetPasswordEmail', data).then(
      () => {
        notifications.show({
          title: 'Revisa tu correo',
          message: 'Hemos enviado un correo con instrucciones para cambiar tu contraseña',
          color: 'green',
        })
        return true;
      }
    ).catch(() => {
      return false;
    })
  };
  