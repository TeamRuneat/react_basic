import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

const CLIENT_ID = 'e0fe8a1a2f88dba51e4c6ae55157e96c';
const REDIRECT_URI = 'https://43.200.176.108.nip.io/api/auth/callback';
const RESPONSE_TYPE = 'code';

const urlParams = new URLSearchParams({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  response_type: RESPONSE_TYPE,
});

@Injectable()
export class AuthService {
  createAuthParameters() {
    return urlParams;
  }

  async getUserToken(code: string) {
    const response = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        code,
      }),
    });

    return await response.json();
  }

  async getUserInfo(accessToken: string) {
    const response = await fetch('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded;chatset=utf-8',
      },
    });
    return response.json();
  }
}
