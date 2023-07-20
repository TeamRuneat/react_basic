import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
  Redirect,
  Session,
} from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @Redirect()
  kakaoAuth() {
    return {
      url: `https://kauth.kakao.com/oauth/authorize?${this.authService.createAuthParameters()}`,
    };
  }

  @Get('callback')
  @Redirect('/')
  async kakaoAuthCallback(
    @Query('code') code: string,
    @Session() session: Record<string, any>,
  ) {
    const token = await this.authService.getUserToken(code);
    console.log('hello', token);
    session.tokens = token;
  }

  @Get('user')
  async getKakaoUserInfo(@Session() session: Record<string, any>) {
    if (!session.tokens) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return await this.authService.getUserInfo(session.tokens.access_token);
  }

  @Get('check')
  loginCheck(@Session() session: Record<string, any>) {
    return !!session.tokens;
  }
}
