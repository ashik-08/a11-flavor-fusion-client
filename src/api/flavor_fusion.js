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

// get all my added food item using email
export const getMyAddedFoodItems = async (email) => {
  const response = await axiosInstance.get(`/my-added-foods?email=${email}`);
  const data = await response.data;
  return data;
};

// update a food item
export const updateFoodItem = async (updatedDetails) => {
  const response = await axiosInstance.patch(`/my-added-foods`, updatedDetails);
  const data = await response.data;
  return data;
};

// delete a food item using id
export const removeFoodItem = async (id) => {
  const response = await axiosInstance.delete(`/my-added-foods/${id}`);
  const data = await response.data;
  return data;
};

// place an order of a food item
export const orderFoodItem = async (newFoodOrder) => {
  const response = await axiosInstance.post("/food-orders", newFoodOrder);
  const data = await response.data;
  return data;
};

// get all my added food item using email
export const getMyOrderedFoodItems = async (email) => {
  const response = await axiosInstance.get(`/my-ordered-foods?email=${email}`);
  const data = await response.data;
  return data;
};

// delete a food item using id
export const removeMyOrderedFoodItem = async (id) => {
  const response = await axiosInstance.delete(`/my-ordered-foods/${id}`);
  const data = await response.data;
  return data;
};
