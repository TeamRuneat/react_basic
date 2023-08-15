import axios from 'axios';

axios.defaults.withCredentials = true;

const get = (url) => axios.get(url).then((response) => response.data);

export function loginCheck() {
  return get('api/auth/check');
}

export function getUser() {
  return get('/api/auth/user');
}

export function logout() {
  return get('api/auth/logout');
}
