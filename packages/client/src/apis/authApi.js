import axios from 'axios';

axios.defaults.withCredentials = true;

export function getUser(){
  return axios.get('/api/auth/user').then((response) => response.data);
}
