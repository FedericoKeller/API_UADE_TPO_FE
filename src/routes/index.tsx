import { Outlet, Route, Routes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { FilmContainer } from "@/features/misc/routes/Container/FilmContainer";
import { lazyImport } from "@/utils/lazyImport";
import { ProtectedRoute } from "@/lib/protected-route";
import { Suspense } from "react";
import { Fallback } from "@/components/Fallback";
import { Welcome } from "@/features/dashboard/routes/Welcome";
import { ProtectedAuthRoute } from "@/lib/protected-auth-route";

const { DashboardRoutes } = lazyImport(
  () => import("@/features/dashboard"),
  "DashboardRoutes"
);
const { AuthRoutes } = lazyImport(
  () => import("@/features/auth"),
  "AuthRoutes"
);

const MainApp = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Outlet />
    </Suspense>
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/film/:id" element={<FilmContainer />}></Route>
      <Route
        path="/auth/*"
        element={
          <ProtectedAuthRoute>
            <AuthRoutes />
          </ProtectedAuthRoute>
        }
      ></Route>
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <MainApp />
          </ProtectedRoute>
        }
      >
        <Route path="/app/" element={<Welcome />}></Route>
        <Route path="/app/*" element={<DashboardRoutes />}></Route>
      </Route>
      <Route path="*" element={<Landing />} />
    </Routes>
  );
};
