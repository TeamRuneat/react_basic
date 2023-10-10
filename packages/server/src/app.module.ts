import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ShopModule } from './modules/shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { HeartbeatController } from './heartbeat.controller';
import * as path from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModule } from './modules/review/review.module';

const ROOT_PROJECT_DIR = path.join(__dirname, '../../..');

@Module({
  controllers: [HeartbeatController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGO_DB_URI'),
        dbName: config.get('MONGO_DB_NAME'),
        auth: {
          username: config.get('MONGO_DB_USERNAME'),
          password: config.get('MONGO_DB_PASSWORD'),
        },
      }),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(ROOT_PROJECT_DIR, 'packages/server', 'resources'),
      serveRoot: '/resources',
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(ROOT_PROJECT_DIR, 'packages/client', 'dist'),
    }),
    ShopModule,
    ReviewModule,
    AuthModule,
  ],
})
export class AppModule {}
