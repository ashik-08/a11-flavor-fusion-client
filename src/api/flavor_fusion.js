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
export const getFoodItems = async (
  category,
  sortField,
  sortOrder,
  currentPage,
  limit,
  searchQuery
) => {
  const response = await axiosInstance.get(
    `/food-items?category=${category}&sortField=${sortField}&sortOrder=${sortOrder}&page=${currentPage}&limit=${limit}&search=${searchQuery}`
  );
  const data = await response.data;
  return data;
};

// get single food item by id
export const getFoodItemById = async (id) => {
  const response = await axiosInstance.get(`/food-item/${id}`);
  const data = await response.data;
  return data;
};

// add a new food item
export const addFoodItem = async (newFoodItem) => {
  const response = await axiosInstance.post("/food-items", newFoodItem);
  const data = await response.data;
  return data;
};

// place an order of a food item
export const orderFoodItem = async (newFoodOrder) => {
  const response = await axiosInstance.post("/food-orders", newFoodOrder);
  const data = await response.data;
  return data;
};
