import axios from "axios";

const API = import.meta.env.VITE_API_BASE;
console.log("APIIII", API);
export const fetchLatest = () => axios.get(`${API}/latest`);
export const fetchAll = () => axios.get(`${API}`);
export const searchNews = (q) => axios.get(`${API}/search?q=${q}`);
