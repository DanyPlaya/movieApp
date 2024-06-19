import { AuthPage } from "@/pages/auth";
import { MainPage } from "@/pages/main";
import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "./layouts/baseLayout";
import { Navigate, Outlet } from "react-router-dom";
import { Chart } from "@/pages/chart";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("isAuth");

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export const appRouter = () => {
  const isAuth = localStorage.getItem("isAuth");
  console.log(isAuth);
  return createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: <PrivateRoute />,
          children: [
            {
              path: "/",
              element: <MainPage />,
            },
            {
              path: "/charts",
              element: <Chart />,
            },
          ],
        },
        {
          path: "/login",
          element: <AuthPage />,
        },
      ],
    },
  ]);
};
