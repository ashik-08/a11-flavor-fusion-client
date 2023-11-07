import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import RegisterPage from "../pages/Registration/RegisterPage";
import LoginPage from "../pages/Login/LoginPage";
import AddFoodPage from "../pages/AddFoodPage/AddFoodPage";
import AllFoodPage from "../pages/AllFoodPage/AllFoodPage";
import PrivateRoute from "./PrivateRoute";
import SingleFoodPage from "../pages/SingleFoodPage/SingleFoodPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/all-food-items",
        element: <AllFoodPage />,
      },
      {
        path: "/food-item/:id",
        element: (
          <PrivateRoute>
            <SingleFoodPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food-item",
        element: (
          <PrivateRoute>
            <AddFoodPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
