import axios from 'axios';

axios.defaults.withCredentials = true;

export function getShops() {
  return axios.get('/api/shop-list').then((response) => response.data);
}

export function addNewShop(data) {
  return axios.post('/api/shop-list', data).then((response) => response.data);
}