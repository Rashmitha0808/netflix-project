import axios from "axios";

const api = axios.create({
  baseURL: "https://academics.newtonschool.co/api/v1",
  headers: { projectId: "29q32kk6mid3" },
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("netflix_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
