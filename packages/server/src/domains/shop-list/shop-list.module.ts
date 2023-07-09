import { Module } from '@nestjs/common';
import { ShopListService } from './shop-list.service';
import { ShopListController } from './shop-list.controller';

@Module({
  controllers: [ShopListController],
  providers: [ShopListService],
})
export class ShopListModule {}
