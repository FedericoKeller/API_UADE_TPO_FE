import { lazyImport } from "@/utils/lazyImport";
import { Center, Loader } from "@mantine/core";
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

const { DashboardRoutes } = lazyImport(() => import('@/features/dashboard'), 'DashboardRoutes');

const App = () => {
  return (
      <Suspense
        fallback={
          <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
            <Loader size={30} />
          </Center>
        }
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