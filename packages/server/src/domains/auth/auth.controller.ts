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
    return await this.authService.getUserInfo(session.tokens.access_token);
  }

  @Get('check')
  loginCheck(@Session() session: Record<string, any>) {
    return !!session.tokens;
  }
}
