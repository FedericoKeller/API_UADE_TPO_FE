import { lazyImport } from "@/utils/lazyImport";
import { Center, Container, Loader } from "@mantine/core";
import { Suspense } from "react";
import { Navigate, Outlet } from 'react-router-dom';

const { Dashboard } = lazyImport(() => import("@/features/misc"), "Dashboard");

const App = () => {
  return (
    <Container>
      <Suspense
        fallback={
          <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
            <Loader size={30} />
          </Center>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};


export const protectedRoutes = [
    {
      path: '/app',
      element: <App />,
      children: [
        { path: '', element: <Dashboard /> },
        { path: '*', element: <Navigate to="." /> },
      ],
    },
  ];