import { Route, Routes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { FilmContainer } from "@/features/misc/routes/Container/FilmContainer";
import { lazyImport } from "@/utils/lazyImport";
import App from "@/App";
import { ProtectedRoute } from "@/lib/protected-route";

const { DashboardRoutes } = lazyImport(() => import('@/features/dashboard'), 'DashboardRoutes');
const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/film/:id" element={<FilmContainer />}></Route>
      <Route path="/auth/*" element={<AuthRoutes />}></Route>
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/app/*" element={<DashboardRoutes />}></Route>
      <Route path="*" element={<Landing />} />
    </Routes>
  )

  // const commonRoutes = [
  //   { path: "/", element: <Landing /> },
  //   { path: "/film/:id", element: <FilmContainer /> },
  //   { path: "*", element: <Navigate to="." /> },
  // ];


  // const routes = user?.data ? protectedRoutes : publicRoutes;

  // const element = useRoutes([...routes, ...commonRoutes]);

  // return <>{element}</>;
};
