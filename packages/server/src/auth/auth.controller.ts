import {
  Controller,
  Get,
  Query,
  Redirect,
  Session,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SessionData } from '../../types';

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
    @Session() session: SessionData,
  ) {
    const token = await this.authService.getUserToken(code);
    session.tokens = token;
  }

  @Get('user')
  @UseGuards(AuthGuard)
  async getKakaoUserInfo(@Session() session: SessionData) {
    return await this.authService.getUserInfo(session.tokens.access_token);
  }

  @Get('check')
  loginCheck(@Session() session: SessionData) {
    return !!session.tokens;
  }

  @Get('logout')
  async logout(@Session() session: SessionData) {
    if (session.tokens) {
      const response = await this.authService.kakaoLogout(session.tokens);
      delete session.tokens;
      return 'ok';
    }
    return 'not ok'; // NOTE 200 은 맞으나 tokens 이 없어 로그아웃 동작이 수행된 적은 없다
  }
}
