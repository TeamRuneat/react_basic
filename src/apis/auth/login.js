import axios from 'axios';

export async function getUser(){
  const { data } = (await axios({
    url: '/users',
    withCredentials: true,
  }));
  return data;
}

export async function addUser(user){
  const { data } = (await axios({
      method: 'POST',
      url: '/users',
      withCredentials: true,
      data: {
        id: user.id,
        email: user.email,
        password: user.password
      },
  }));
  return data;
}
