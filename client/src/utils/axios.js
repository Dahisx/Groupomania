import axios from "axios";
import { VITE_HOST } from "../config";

const axiosInstance = axios.create({
    baseURL: VITE_HOST,
    timeout: 5000,
    headers: {
        "Content-Type" : "application/json"
    }
})

axiosInstance.interceptors.request.use(async config => {
    const token = localStorage.getItem('token');
    if(token) {
        console.log(token);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
error => {
    Promise.reject(error);
});

export default axiosInstance;