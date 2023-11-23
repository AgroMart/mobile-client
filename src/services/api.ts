import axios from 'axios';

export const baseURL =  process.env.NODE_ENV === 'development' ? `http://${process.env.LOCAL_IP}:1337/` : 'https://api-agromart.herokuapp.com/';

const api = axios.create({
  baseURL,
  timeout: 5000,
});

export default api;
