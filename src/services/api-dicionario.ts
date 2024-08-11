import axios from 'axios';

export const baseURL = 'https://agromarttcc.shop/dicionario/';
const apiDicionario = axios.create({
  baseURL,
  timeout: 9000,
  headers: { Accept: 'application/json' },
});

export default apiDicionario;
