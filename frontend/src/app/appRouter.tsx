import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "./layouts/baseLayout";
import { MainPage } from "@/pages/main";
import { AuthForm } from "@/features/auth";

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
          element: <MainPage />,
        },
        {
          path: "/login",
          element: <AuthForm />,
        },
      ],
    },
  ]);
};
