import { Route, Routes } from "react-router-dom";
import { Lists } from "./Lists";
import { Films } from "./Films";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/lists/:id" element={<Films />} />
      <Route path="/lists" element={<Lists />} />
    </Routes>
  );
};
