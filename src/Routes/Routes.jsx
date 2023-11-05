import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import RegisterPage from "../pages/Registration/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
]);
