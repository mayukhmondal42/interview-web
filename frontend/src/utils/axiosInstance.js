import axios from "axios"
import { BASE_URL } from "./apiPaths"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token")
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // STOPPED the infinite loop - don't force redirect
      localStorage.removeItem("token");
      // only redirect if not already on login
      if (window.location.pathname !== "/login" && window.location.pathname !== "/signup") {
         // optional: window.location.href = "/login"
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance