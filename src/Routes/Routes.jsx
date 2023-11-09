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
import FoodOrderPage from "../pages/FoodOrderPage/FoodOrderPage";
import MyAddedFoodPage from "../pages/MyAddedFoodPage/MyAddedFoodPage";
import UpdateFoodPage from "../pages/UpdateFoodPage/UpdateFoodPage";

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
      {
        path: "/update-food-item/:id",
        element: (
          <PrivateRoute>
            <UpdateFoodPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/order-food-item/:id",
        element: (
          <PrivateRoute>
            <FoodOrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/added-food-items",
        element: (
          <PrivateRoute>
            <MyAddedFoodPage />
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
