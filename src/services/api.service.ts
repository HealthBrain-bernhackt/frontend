import axios from "axios";

const api = axios.create({
  // baseURL: process.env.BABEL_BACKEND_URL,
  baseURL: "someshit",
});

api.interceptors.request.use(
  (config: any) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default api;
