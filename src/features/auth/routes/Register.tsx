
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { notifications } from '@mantine/notifications';

export const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const onSuccess = () => {
    notifications.show({
      color: "green",
      message: "¡Cuenta creada! Revisa tu mail para activar tu cuenta",
    });

    navigate(`${redirectTo ? `${redirectTo}` : '/app'}`, {
      replace: true,
    })
  }

  return (
    <Layout title="Register">
      <RegisterForm onSuccess={onSuccess} />
    </Layout>
  );
};