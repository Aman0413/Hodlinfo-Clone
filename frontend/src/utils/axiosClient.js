import axios from "axios";

let baseUrl =
  import.meta.env.VITE_NODE_ENV === "production"
    ? import.meta.env.VITE_SERVER_URL
    : "http://localhost:4000/api/v1";

const axiosClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export default axiosClient;
