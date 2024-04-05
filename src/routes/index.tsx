import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { Landing } from '@/features/misc';
import { Login } from '@/features/auth/routes/Login';


export const AppRoutes = () => {
  
  const commonRoutes = [{ path: '/', element: <Landing /> }, { path: '/login', element: <Login/> }]; //Falta hacer el link al /login al boton

  const element = useRoutes([...commonRoutes, ...publicRoutes]);

  return <>{element}</>;
};