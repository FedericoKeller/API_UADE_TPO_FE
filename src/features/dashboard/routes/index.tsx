import { Route, Routes } from "react-router-dom";
import { WelcomeBack } from "./WelcomeBack";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomeBack />} />
    </Routes>
  );
};
