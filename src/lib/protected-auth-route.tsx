import { Navigate } from 'react-router-dom';
import { useUser } from './auth';

export const ProtectedAuthRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  
  if (user.data) {
    return (
      <Navigate
        to={`/app`}
        replace
      />
    );
  }

  return children;
};