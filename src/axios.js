import axios from "axios";

const instanse = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://repoappidea.onrender.com/",
});

instanse.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});
export default instanse;
