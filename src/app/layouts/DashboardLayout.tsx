import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideMenu from "../../shared/components/SideBar";
import Navbar from "../../shared/components/Navbar";

export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <SideMenu />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
}
