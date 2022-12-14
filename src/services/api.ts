import axios from 'axios';

export const baseURL =  process.env.NODE_ENV === 'development' ? `http://6cf8-2804-14c-6581-b1e-454a-9387-e4f3-b53f.ngrok.io` : 'https://api-agromart.herokuapp.com/';

const api = axios.create({
  baseURL,
  timeout: 5000,
});

export default api;
