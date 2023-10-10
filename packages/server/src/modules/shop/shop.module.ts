import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Shop, ShopSchema } from '../../schemas/shop.schema';
import S3MulterModule from '../../providers/S3MulterModule';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Shop.name, schema: ShopSchema }]),
    S3MulterModule(),
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
