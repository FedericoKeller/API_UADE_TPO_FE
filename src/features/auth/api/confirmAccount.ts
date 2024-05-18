import { api } from "@/lib/api-client";
import { notifications } from "@mantine/notifications";

export type ConfirmAccountDTO = {
    token: string;
  };
  
  export const confirmAccount = (
        data: ConfirmAccountDTO
  ) => {
    return api.put<{ active: boolean }>(`/auth/confirmation/${data.token}`).then(
      (response) => {
          notifications.show({
              title: 'Cuenta confirmada',
              message: 'Tu cuenta ha sido confirmada exitosamente',
              color: 'green',
  
      });
        return response;
      }
    ).catch(() => {
      return null;
    });
  };