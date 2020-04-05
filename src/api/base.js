import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      'Content-Type': 'application/json'
    }
});