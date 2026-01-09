import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import RootLayouts from "../Layout/RootLayouts";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/app",
    element: (
      <PrivateRoute>
        <RootLayouts />
      </PrivateRoute>
    ),
    children: ["/dashboard", { path: "dashboard", element: <Dashboard /> }],
  },
]);
