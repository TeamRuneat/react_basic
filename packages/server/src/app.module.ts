import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ShopListModule } from './modules/shop-list/shop-list.module';
import { AuthModule } from './auth/auth.module';
import { HeartbeatController } from './heartbeat.controller';
import * as path from 'path';

const ROOT_PROJECT_DIR = path.join(__dirname, '../../..');

@Module({
  controllers: [HeartbeatController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(ROOT_PROJECT_DIR, 'packages/client', 'dist'),
    }),
    ShopListModule,
    AuthModule,
  ],
})
export class AppModule {}
