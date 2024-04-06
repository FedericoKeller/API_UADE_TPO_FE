
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Register">
      <RegisterForm onSuccess={() => navigate('/auth/login')} />
    </Layout>
  );
};