import axios from 'axios';

axios.defaults.withCredentials = true;

export function getShops() {
  return axios.get('/api/shop-list').then((response) => response.data);
}

export function addNewShop(data) {
  return axios.post('/api/shop-list', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then((response) => response.data);
}

export function searchShops(keyword) {
  return axios.get(`/api/shop-list/search?keyword=${keyword}`).then((response) => response.data);
}