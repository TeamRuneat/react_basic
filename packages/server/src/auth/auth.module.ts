import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { KakaoModule } from '../providers/kakao/kakao.module';

@Module({
  controllers: [AuthController],
  imports: [KakaoModule],
})
export class AuthModule {}
