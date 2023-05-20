import customAxios from '../../utils/customAxios';

export async function getDomains(){
  const axios = customAxios();
  const { data } = (await axios({
    url: '/admin/domains',
  }));
  return data;
}


export async function updateDomains(domain, companyName){
  const axios = customAxios();
  const { data } = (await axios({
      url: '/admin/domains',
      method: 'POST',
      data: {
        domain,
        companyName
      },
  }));
  return data;
}
