import axios from 'axios';

export async function getDomains(){
  const { data } = (await axios({
    url: '/admin/domains',
    withCredentials: true,
  }));
  return data;
}

export async function updateDomains(domain, companyName){
  const { data } = (await axios({
      method: 'POST',
      url: '/admin/domains',
      withCredentials: true,
      data: {
        domain,
        companyName
      },
  }));
  return data;
}
