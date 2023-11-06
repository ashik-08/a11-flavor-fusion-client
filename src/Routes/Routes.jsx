import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import RegisterPage from "../pages/Registration/RegisterPage";
import LoginPage from "../pages/Login/LoginPage";
import AddFoodPage from "../pages/AddFoodPage/AddFoodPage";

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
      {
        path: "/add-food-item",
        element: <AddFoodPage></AddFoodPage>,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);
