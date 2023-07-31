import { Injectable } from '@nestjs/common';
import fetch, { HeadersInit } from 'node-fetch';
import { ConfigService } from '@nestjs/config';

const KAKAO_AUTH_URL = 'https://kauth.kakao.com';
const KAKAO_API_URL = 'https://kapi.kakao.com';

@Injectable()
export class KakaoService {
  constructor(private configService: ConfigService) {}

  getAuthCallbackUrl() {
    const queryParams = this.createCallbackQueryParams({
      response_type: 'code',
    });
    return `${KAKAO_AUTH_URL}/oauth/authorize?${queryParams}`;
  }

  async getUserAuthToken(code: string) {
    const bodyParams = this.createCallbackQueryParams({
      grant_type: 'authorization_code',
      code,
    });

    const response = await fetch(`${KAKAO_AUTH_URL}/oauth/token`, {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: bodyParams,
    });

    return await response.json();
  }

  async logout(accessToken: any) {
    console.log(accessToken);
    const response = await fetch(`${KAKAO_AUTH_URL}/v1/user/logout`, {
      method: 'post',
      headers: this.createAuthHeader(accessToken.access_token),
    });
    return response.json();
  }

  async getUserInfo(accessToken: string) {
    const response = await fetch(`${KAKAO_API_URL}/v2/user/me`, {
      headers: this.createAuthHeader(accessToken),
    });
    return response.json();
  }

  private getRedirectUri() {
    const redirectUri = this.configService.get<string>('KAKAO_REDIRECT_URL');
    return `${redirectUri}/api/auth/callback`;
  }

  private createCallbackQueryParams(otherParams: Record<string, string>) {
    const kakaoAppId = this.configService.getOrThrow('KAKAO_APP_ID');
    return new URLSearchParams({
      client_id: kakaoAppId,
      redirect_uri: this.getRedirectUri(),
      ...otherParams,
    });
  }

  private createAuthHeader(accessToken?: string): HeadersInit {
    const baseHeaders: HeadersInit = {
      'Content-Type': 'application/x-www-form-urlencoded;chatset=utf-8',
    };

    if (accessToken) {
      baseHeaders['Authorization'] = `Bearer ${accessToken}`;
    }
    return baseHeaders;
  }
}
