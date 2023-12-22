import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'development' ? 'https://z5a5lohzk73nhveu5wsb5youne0etjlf.lambda-url.sa-east-1.on.aws/' : `http://${process.env.LOCAL_IP}:3000/`;

const api = axios.create({
  baseURL,
  timeout: 9000,
  headers: {Accept: "application/json"
  }

});

export default api;
