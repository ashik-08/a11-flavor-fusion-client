import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  withCredentials: true,
});

// add a new user
export const addUser = async (user) => {
  const response = await axiosInstance.post("/users", user);
  const data = await response.data;
  return data;
};

// get food items
export const getFoodItems = async () => {
  const response = await axiosInstance.get("/food-items");
  const data = await response.data;
  return data;
};

// add a new food item
export const addFoodItem = async (newFoodItem) => {
  const response = await axiosInstance.post("/food-items", newFoodItem);
  const data = await response.data;
  return data;
};
