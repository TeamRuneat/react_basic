import axios from 'axios';

const customAxios = () => {
  const axiosConfig = {
    baseURL: 'http://localhost:8088/admin',
    withCredentials: true,
  };

  return axios.create(axiosConfig);
};

export default customAxios;
