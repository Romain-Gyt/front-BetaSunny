import axios from "axios";
import { onRequest, onResponse, onError } from './interceptors';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(onRequest, (err) => Promise.reject(err));
api.interceptors.response.use(onResponse,onError);

export default api;
