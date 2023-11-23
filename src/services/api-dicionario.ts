import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'development' ? `http://${process.env.LOCAL_IP}:3000/` : 'https://api-dicionario.herokuapp.com/';

const api = axios.create({
  baseURL,
  timeout: 9000,
  headers: {Accept: "application/json"
  }

});

export default api;
