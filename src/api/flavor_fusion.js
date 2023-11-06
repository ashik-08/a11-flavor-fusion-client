import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  withCredentials: true,
});

// add a new food item
export const addFoodItem = async (newFoodItem) => {
  try {
    const response = await axiosInstance.post("/add-food-item", newFoodItem);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
