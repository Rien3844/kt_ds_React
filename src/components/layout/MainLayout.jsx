import { Outlet } from "react-router-dom";
import { HeaderNavigation } from "./HeaderNavigation.jsx";

export const MainLayout = () => {
  return (
    <div className="main-container">
      <HeaderNavigation />
      <Outlet />
    </div>
  );
};
