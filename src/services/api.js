import axios from 'axios';

const api = axios.create({
  baseURL: "https://ecommerce-api-comunidata.herokuapp.com"
});

export default api;