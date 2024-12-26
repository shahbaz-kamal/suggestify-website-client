import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://suggestify-website-server.vercel.app/",
});
const UseAxiosSecure = () => {
  return axiosInstance;
};

export default UseAxiosSecure;
