import axios from 'axios';

const api = axios.create({
  baseURL: 'https://oposicaoareial.000webhostapp.com',
});

export default api;