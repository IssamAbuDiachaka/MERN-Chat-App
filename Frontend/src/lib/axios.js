import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.BASEURL || "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },  
});

export default api;