import axios from 'axios';

export const baseURL = 'http://192.168.0.10:1337';

const api = axios.create({
  baseURL,
  timeout: 5000,
});

export default api;
