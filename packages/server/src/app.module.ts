import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ShopListModule } from './domains/shop-list/shop-list.module';
import { AuthModule } from './domains/auth/auth.module';
import { HeartbeatController } from './heartbeat.controller';
import * as path from 'path';

@Module({
  controllers: [HeartbeatController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../../../client', 'dist'),
    }),
    ShopListModule,
    AuthModule,
  ],
})
export class AppModule {}
