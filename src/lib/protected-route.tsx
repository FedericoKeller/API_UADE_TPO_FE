import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from './auth';
import { Fallback } from '@/components/Fallback';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const location = useLocation();
  
  if(user.isFetching && user.data === null) return <Fallback />;

  if (!user.data) {
    return (
      <Navigate
        to={`/auth/login?redirectTo=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );
  }

  return children;
};