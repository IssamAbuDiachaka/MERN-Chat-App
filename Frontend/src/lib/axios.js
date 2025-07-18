import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.BASEURL || "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
    },  
    withCredentials: true,
});

export default api;