import customAxios from '../utils/customAxios';

export async function getUser(){
  const axios = customAxios();
  const { data } = (await axios({
    url: '/users',
  }));
  return data;
}

export async function addUser(user){
  const axios = customAxios();
  const { data } = (await axios({
      url: '/users',
      method: 'POST',
      data: {
        id: user.id,
        email: user.email,
        password: user.password
      },
  }));
  return data;
}
