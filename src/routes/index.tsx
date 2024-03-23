import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { Landing } from '@/features/misc';


export const AppRoutes = () => {
  
  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const element = useRoutes([...commonRoutes, ...publicRoutes]);

  return <>{element}</>;
};