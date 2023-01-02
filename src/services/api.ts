import axios from 'axios';

export const baseURL =  process.env.NODE_ENV === 'development' ? `https://api-agromart.herokuapp.com/` : 'https://api-agromart.herokuapp.com/';

const api = axios.create({
  baseURL:"",
  timeout: 5000,
});

export default api;
