import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ratnesh-blog.herokuapp.com/api",
});
