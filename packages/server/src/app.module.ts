import { Module } from '@nestjs/common';
import { ShopListModule } from './domains/shop-list/shop-list.module';
import { HelloModule } from './domains/hello/hello.module';
import { AuthModule } from './domains/auth/auth.module';

@Module({
  imports: [ShopListModule, HelloModule, AuthModule],
})
export class AppModule {}
