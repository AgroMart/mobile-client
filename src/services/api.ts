import axios from 'axios';

// export const baseURL = 'http://{SEU_IP}:1337';
export const baseURL = 'https://api-agromart.herokuapp.com/';

const api = axios.create({
  baseURL,
  timeout: 5000,
});

export default api;
