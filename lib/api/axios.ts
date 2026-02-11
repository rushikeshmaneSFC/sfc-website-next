import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "@/lib/config";

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

const token = localStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const navigate = useNavigate();
      navigate("/");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
