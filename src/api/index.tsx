// src/api/axios.ts
import axios, { AxiosRequestConfig } from 'axios';

export type RequestBody = {} & AxiosRequestConfig;

const api = axios.create({
  baseURL: import.meta.env.BASE_URL ?? '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
