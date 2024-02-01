import axios from "axios";

const baseUrl = "http://localhost:4000/api/v1/";

const axiosClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export default axiosClient;
