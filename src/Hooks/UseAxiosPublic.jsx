import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://suggestify-server-updated.vercel.app/",
});
const UseAxiosPublic = () => {
  return axiosInstance;
};

export default UseAxiosPublic;
