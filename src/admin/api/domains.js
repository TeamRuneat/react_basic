import customAxios from "./apiConfig";

export async function getDomains(){
  const axios = customAxios();
  const { data } = (await axios({
    url: '/domains',
  }));
  return data;
}


export async function updateDomains(domain, companyName){
  const axios = customAxios();
  const { data } = (await axios({
      url: '/domains',
      method: 'POST',
      data: {
        domain,
        companyName
      },
  }));
  return data;
}
