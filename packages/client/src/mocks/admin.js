import {rest} from 'msw';

const DOMAIN_API_STORAGE_KEY = 'MSW:DOMAIN';

const getDomainsFromStorage = () => JSON.parse(localStorage.getItem(DOMAIN_API_STORAGE_KEY) || '[]');
const setDomainsToStorage = (obj) => {
  const db = JSON.parse(localStorage.getItem(DOMAIN_API_STORAGE_KEY) || '[]');
  db.push(obj);
  localStorage.setItem(DOMAIN_API_STORAGE_KEY, JSON.stringify(db));
};

/*
 * domain API 는 어드민에서 사용될 API 를 예상하여 작성하였음.
 * - GET /admin/domains : {domain: string, companyName: string} 을 내려준다.
 * - POST /admin/domains : {domain: string, companyName: string} 을 보낼 수 있으면, HTTP Status 로 확인한다.
 */
export const domainApiHandlers = [
  rest.get('/admin/domains', (_, res, ctx) => {
    const dbResponse = getDomainsFromStorage();
    return res(ctx.status(200), ctx.json(dbResponse));
  }),
  rest.post('/admin/domains', async (req, res, ctx) => {
    const response = await req.json();

    if (!(response.domain && response.companyName)) {
      return res(ctx.status(400));
    } else {
      setDomainsToStorage(response);
      return res(ctx.status(200));
    }
  }),
];
