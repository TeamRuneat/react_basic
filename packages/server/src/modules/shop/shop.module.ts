import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Shop, ShopSchema } from './schemas/shop.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Shop.name, schema: ShopSchema }]),
    MulterModule.register({
      dest: './resources',
    }),
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
