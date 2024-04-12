import { Navigate, useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { Landing } from '@/features/misc';
import { protectedRoutes } from './protected';
import { useUser } from '@/lib/auth';
import { AuthUser } from '@/features/auth';


export const AppRoutes = () => {
  const user = useUser({
    placeholderData: {} as AuthUser,
    staleTime: Infinity
  });

  const commonRoutes = [{ path: '/', element: <Landing /> }, { path: '*', element: <Navigate to="." />}];
  
  const routes = user?.data ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);


  return <>{element}</>;
};