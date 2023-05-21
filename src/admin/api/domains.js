import axios from 'axios';

const baseURL = 'http://localhost:8088';

export async function getDomains(){
  const { data } = (await axios({
    url: `${baseURL}/admin/domains`,
    withCredentials: true,
  }));
  return data;
}


export async function updateDomains(domain, companyName){
  const { data } = (await axios({
      method: 'POST',
      url: `${baseURL}/admin/domains`,
      withCredentials: true,
      data: {
        domain,
        companyName
      },
  }));
  return data;
}
