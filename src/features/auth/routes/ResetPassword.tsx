
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ResetPasswordForm } from '../components/ResetPasswordForm/ResetPasswordForm';
import { useEffect, useState } from 'react';
import { getAccessToResetPassword } from '../api/resetPassword';

export const ResetPassword = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const [ getEmail, setEmail ] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            const accessData = await getAccessToResetPassword({ token: token as string }) as unknown as { email: string };
            if (!accessData?.email) {
                return navigate('/auth/login');
            }

            setEmail(accessData?.email);
        };
        fetchData();
    }, [token, navigate]);

    return (
        <Layout title="Resetear Contraseña">
            <ResetPasswordForm email={getEmail ? getEmail : ''} onSuccess={() => navigate('/auth/login')} />
        </Layout>
    );
};