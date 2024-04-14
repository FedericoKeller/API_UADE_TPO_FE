import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Lists } from "./Lists";
import { Films } from "./Films";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/lists/:id" element={<Films />} />
      <Route path="/lists" element={<Lists />} />
    </Routes>
  );
};
