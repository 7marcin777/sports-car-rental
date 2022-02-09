import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
});
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : undefined;

export default axiosInstance