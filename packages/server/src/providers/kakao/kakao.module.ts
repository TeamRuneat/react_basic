import { KakaoService } from './kakao.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule],
  providers: [KakaoService],
  exports: [KakaoService],
})
export class KakaoModule {}
