import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import RegisterPage from "../pages/Registration/RegisterPage";
import LoginPage from "../pages/Login/LoginPage";
import AddFoodPage from "../pages/AddFoodPage/AddFoodPage";
import AllFoodPage from "../pages/AllFoodPage/AllFoodPage";

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
      {
        path: "/all-food-items",
        element: <AllFoodPage></AllFoodPage>,
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
