import axios from 'axios';

const baseURL = 'http://localhost:8088';

export async function getUser(){
  const { data } = (await axios({
    url: `${baseURL}/users`,
    withCredentials: true,
  }));
  return data;
}

export async function addUser(user){
  const { data } = (await axios({
      method: 'POST',
      url: `${baseURL}/users`,
      withCredentials: true,
      data: {
        id: user.id,
        email: user.email,
        password: user.password
      },
  }));
  return data;
}
