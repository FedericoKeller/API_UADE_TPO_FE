
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ForgotPasswordForm } from '../components/ForgotPasswordForm/ForgotPasswordForm';

export const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Cambiar Contraseña">
      <ForgotPasswordForm onSuccess={() => navigate('/auth/forgot-password')} />
    </Layout>
  );
};