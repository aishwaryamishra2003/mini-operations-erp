import axios from "axios";

const api = axios.create({
  baseURL: "https://mini-operations-erp-a6ps.onrender.com/",
});

export default api;