import { Fallback } from "@/components/Fallback";
import { lazyImport } from "@/utils/lazyImport";
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

const { DashboardRoutes } = lazyImport(() => import('@/features/dashboard'), 'DashboardRoutes');

const App = () => {
  return (
      <Suspense
        fallback={<Fallback />}
      >
        <Outlet />
      </Suspense>
  );
};


export const protectedRoutes = [
    {
      path: '/app',
      element: <App />,
      children: [
        { 
          path: '*', 
          element: <DashboardRoutes />,
        },
      ],
    },
  ];