import { createBrowserRouter } from "react-router-dom";

import Login from "../../features/auth/pages/Login";
import Home from "../../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,

    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  // dashboard layout
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
