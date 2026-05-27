import { Outlet } from "react-router-dom";
import Navbar from "../../shared/components/Navbar";

export default function DashboardLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  )
};
