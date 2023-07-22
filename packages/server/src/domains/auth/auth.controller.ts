import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
  Redirect,
  Session,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

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
  @UseGuards(AuthGuard)
  async getKakaoUserInfo(@Session() session: Record<string, any>) {
    const info = await this.authService.getUserInfo(
      session.tokens.access_token,
    );
    session.info = info;
    return info;
  }

  @Get('check')
  loginCheck(@Session() session: Record<string, any>) {
    return !!session.tokens;
  }

  @Get('logout')
  async logout(@Session() session: Record<string, any>) {
    if (session.tokens) {
      const response = await this.authService.kakaoLogout(session.tokens);
      delete session.tokens;
      return 'ok';
    }
    return 'not ok'; // NOTE 200 은 맞으나 tokens 이 없어 로그아웃 동작이 수행된 적은 없다
  }
}
