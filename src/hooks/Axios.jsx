import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://a11-flavor-fusion-server.vercel.app/api/v1",
  withCredentials: true,
});

const Axios = () => {
  return axiosInstance;
};

export default Axios;
