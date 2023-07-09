import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { ConfigModule, ConfigService } from '@nestjs/config';

const CLIENT_ID = 'e0fe8a1a2f88dba51e4c6ae55157e96c';
const RESPONSE_TYPE = 'code';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  createAuthParameters() {
    return new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: this.getRedirectUri(),
      response_type: RESPONSE_TYPE,
    });
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
        redirect_uri: this.getRedirectUri(),
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

  private getRedirectUri() {
    const redirectUri = this.configService.get<string>('KAKAO_REDIRECT_URL');
    return `${redirectUri}/api/auth/callback`;
  }
}
