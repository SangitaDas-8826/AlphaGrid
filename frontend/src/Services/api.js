import axios from "axios";

const API = axios.create({
  baseURL: "https://alphagrid-my6w.onrender.com", // change to your backend
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
