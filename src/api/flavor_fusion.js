import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  withCredentials: true,
});

// add a new user
export const addUser = async (user) => {
  const response = await axiosInstance.post("/add-user", user);
  const data = await response.data;
  return data;
};

// add a new food item
export const addFoodItem = async (newFoodItem) => {
  const response = await axiosInstance.post("/add-food-item", newFoodItem);
  const data = await response.data;
  return data;
};
