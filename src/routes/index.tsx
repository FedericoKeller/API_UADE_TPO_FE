mport { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { Landing } from '@/features/misc';
import { protectedRoutes } from './protected';
import { useUser } from '@/lib/auth';


export const AppRoutes = () => {
  const user = useUser();

  const commonRoutes = [{ path: '/', element: <Landing /> }];
  
  const routes = user?.data ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};