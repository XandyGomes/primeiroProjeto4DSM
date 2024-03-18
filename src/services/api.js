import axios from "axios"

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: { "Content-type":"application/json" }
});

export default api;