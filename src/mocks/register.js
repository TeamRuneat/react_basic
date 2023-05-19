import {rest} from 'msw';

const ACCOUNT_STORAGE_KEY = 'MSW:ACCOUNTS';

// @see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_string
async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  // convert bytes to hex string
  return hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

const selectAccount = async (email, password) => {
  const db = JSON.parse(localStorage.getItem(ACCOUNT_STORAGE_KEY) || '{}');
  const hashedPassword = await digestMessage(password);
  if (db[email] === hashedPassword) {
    return {nickname: 'babo'};
  }
  throw new Error('not found');
};
const insertAccount = async (email, password) => {
  const db = JSON.parse(localStorage.getItem(ACCOUNT_STORAGE_KEY) || '{}');
  const hashedPassword = await digestMessage(password);

  if (db[email]) throw new Error('already registered');

  db[email] = hashedPassword;

  localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(db));
};

/*
 * 이 파일의 API 들은 유저의 가입동선을 흉내낸다
 * 유저는 POST /login 을 통해 로그인을 시도할 수 있다. 이때 필요한 것은 email, password 이다.
 * 가입된 유저가 아니면 400 Bad Request 로 한다.
 *
 * 유저는 가입할 수 있다. 가입은 아래와 같다.
 * POST /register 와 함께 email, password 를 요청한다. (password confirm 은 FE 에서 한다)
 *  - 이메일이 이미 존재하는 경우, 혹은 이메일이 정규식을 통과하지 못한 경우 400 Bad Request
 *  - 10% 확률로 500 Internal Server Error 를 내려주고자 했으나 쓸모없어서 패스
 *  - 가입이 완료되었으면 200 OK 를 내려준다.
 */

const VALID_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const handler = [
  rest.post('/register', async (req, res, ctx) => {
    const {email, password} = await req.json();

    if (!email || !password) {
      return res(ctx.status(400), ctx.text('insufficient parameter'));
    } else if (!VALID_EMAIL_REGEX.test(email)) {
      return res(ctx.status(400), ctx.text('invalid email format'));
    }

    try {
      await insertAccount(email, password);
      return res(ctx.status(200));
    } catch (e) {
      return res(ctx.status(400), ctx.text(e.message || 'unknown error'));
    }
  }),
  rest.post('/login', async (req, res, ctx) => {
    const {email, password} = await req.json();

    if (!email || !password) {
      return res(ctx.status(400), ctx.text('insufficient parameter'));
    } else if (!VALID_EMAIL_REGEX.test(email)) {
      return res(ctx.status(400), ctx.text('invalid email format'));
    }

    try {
      const userInfo = await selectAccount(email, password);
      return res(ctx.status(200), ctx.json(userInfo));
    } catch (e) {
      return res(ctx.status(400), ctx.text(e.message || 'unknown error'));
    }
  })
];
