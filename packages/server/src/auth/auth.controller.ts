import {
  Controller,
  Get,
  Query,
  Redirect,
  Session,
  UseGuards,
} from '@nestjs/common';

import { KakaoService } from '../providers/kakao/kakao.service';
import { AuthGuard } from './auth.guard';
import { SessionData } from '../../types';

@Controller('auth')
export class AuthController {
  constructor(private readonly kakaoService: KakaoService) {}

  @Get()
  @Redirect()
  kakaoAuth() {
    return {
      url: this.kakaoService.getAuthCallbackUrl(),
    };
  }

  @Get('callback')
  @Redirect('/')
  async kakaoAuthCallback(
    @Query('code') code: string,
    @Session() session: SessionData,
  ) {
    const token = await this.kakaoService.getUserAuthToken(code);
    session.tokens = token;
  }

  @Get('user')
  @UseGuards(AuthGuard)
  async getKakaoUserInfo(@Session() session: SessionData) {
    return await this.kakaoService.getUserInfo(session.tokens.access_token);
  }

  @Get('check')
  loginCheck(@Session() session: SessionData) {
    return !!session.tokens;
  }

  @Get('logout')
  async logout(@Session() session: SessionData) {
    if (session.tokens) {
      const response = await this.kakaoService.logout(session.tokens);
      delete session.tokens;
      return 'ok';
    }
    return 'not ok'; // NOTE 200 은 맞으나 tokens 이 없어 로그아웃 동작이 수행된 적은 없다
  }
}
