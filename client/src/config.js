import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ratnesh-blog.herokuapp.com/api",
});
export default axiosInstance;
