import axios from 'axios';

// export const baseURL = 'http://192.168.0.11:1337';
export const baseURL = 'https://agromart-cms.herokuapp.com/';

const api = axios.create({
  baseURL,
  timeout: 5000,
});

export default api;
