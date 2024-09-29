// src/api/axios.ts
import axios, { AxiosRequestConfig } from 'axios';

export type RequestBody = {} & AxiosRequestConfig;

const api = axios.create({
  baseURL: import.meta.env.BASE_URL ?? '',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getTokenBearer();
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor

api.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },

  (error) => {
    // Do something with response error
    return Promise.reject(error);
  },
);

export const getTokenBearer = () => {
  return api.defaults.headers.common.Authorization;
};

export const setTokenBearer = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const setToken = (token: string) => {
  api.defaults.headers.common['token-id'] = token;
};

export const removeToken = () => {
  delete api.defaults.headers.common.Authorization;
  delete api.defaults.headers.common['token-id'];
};

export default api;
