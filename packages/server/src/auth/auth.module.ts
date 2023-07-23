import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { KakaoService } from './kakao.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [KakaoService],
  imports: [ConfigModule],
})
export class AuthModule {}
