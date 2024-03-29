import Axios from 'axios';
import { API_BASE_URL } from "../config/constant";

const axios = Axios.create({
    baseURL: `${API_BASE_URL}`,
    headers: { "Content-Type": "application/json" },
});

axios.interceptors.request.use(
    (config) => {
        return Promise.resolve(config);
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;