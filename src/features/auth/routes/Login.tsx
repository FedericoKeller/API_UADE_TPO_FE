import { useNavigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm/LoginForm';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Iniciar sesión">
      <LoginForm onSuccess={() => navigate('/')} />
    </Layout>
  );
};