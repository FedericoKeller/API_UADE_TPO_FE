import { Navigate, useParams } from 'react-router-dom';
import { confirmAccount } from '../api/confirmAccount';
import { useEffect } from 'react';
import { notifications } from '@mantine/notifications';


export const ConfirmAccount = () => {
    const { token } = useParams();
    
    useEffect(() => {
        confirmAccount({ token: token as string }).then(() => {
            notifications.show({
                title: 'Cuenta confirmada',
                message: 'Tu cuenta ha sido confirmada exitosamente',
                color: 'green',
            })   
        });
    }, [token]);

  return (
    <Navigate to="/auth/login"></Navigate>
  );
};