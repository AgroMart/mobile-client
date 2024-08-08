import axios from 'axios';

export const baseURL = 'http://ec2-3-90-151-222.compute-1.amazonaws.com:3000/';
const apiDicionario = axios.create({
  baseURL,
  timeout: 9000,
  headers: { Accept: 'application/json' },
});

export default apiDicionario;
