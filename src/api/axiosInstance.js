import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://bookmangebackend.onrender.com', // server URL
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance