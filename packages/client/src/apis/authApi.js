import axios from 'axios';

axios.defaults.withCredentials = true;

export function loginCheck(){
  return axios.get('api/auth/check').then((response) => response.data);
}

export function getUser(){
  return axios.get('/api/auth/user').then((response) => response.data);
}

export function logout(){
  return axios.get('api/auth/logout').then((response) => response.data);
}
