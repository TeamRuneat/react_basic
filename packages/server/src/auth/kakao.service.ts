import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { ConfigService } from '@nestjs/config';

const CLIENT_ID = 'e0fe8a1a2f88dba51e4c6ae55157e96c';
const RESPONSE_TYPE = 'code';

const KAKAO_AUTH_URL = 'https://kauth.kakao.com';

@Injectable()
export class KakaoService {
  constructor(private configService: ConfigService) {}

  createAuthParameters() {
    return new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: this.getRedirectUri(),
      response_type: RESPONSE_TYPE,
    });
  }

  async getUserToken(code: string) {
    const response = await fetch(`${KAKAO_AUTH_URL}/oauth/token`, {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        redirect_uri: this.getRedirectUri(),
        code,
      }),
    });

    return await response.json();
  }

  async kakaoLogout(accessToken: any) {
    console.log(accessToken);
    const response = await fetch(`${KAKAO_AUTH_URL}/v1/user/logout`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });
    return response.json();
  }

  async getUserInfo(accessToken: string) {
    const response = await fetch(`${KAKAO_AUTH_URL}/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded;chatset=utf-8',
      },
    });
    return response.json();
  }

  private getRedirectUri() {
    const redirectUri = this.configService.get<string>('KAKAO_REDIRECT_URL');
    return `${redirectUri}/api/auth/callback`;
  }
}
