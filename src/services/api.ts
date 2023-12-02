import axios from 'axios';

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/craques`;
const api = axios.create({
    baseURL: baseUrl,
});

export default api;