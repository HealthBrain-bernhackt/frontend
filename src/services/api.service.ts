import axios from "axios";

const api = axios.create({
  // baseURL: process.env.BABEL_BACKEND_URL,
  baseURL: "https://health-brain-922fa718a7c7.herokuapp.com/",
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
