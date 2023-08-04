import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ShopList } from './entities/shop-list.entity';
import { validate, validateOrReject } from 'class-validator';

const createDummy = (id: number): ShopList => ({
  id,
  title: '어쭈구리밥상',
  type: ['한식', '백반'],
  rating: 3.7,
  ratingCount: 15,
  tags: ['순한맛', '집밥'],
  averagePrice: 10000,
});

@Injectable()
export class ShopListService {
  private _dummy: ShopList[] = Array.from({ length: 10 }).map((_, index) =>
    createDummy(index),
  );

  async create(createShopListDto: CreateShopDto) {
    await validateOrReject(createShopListDto);
    return 'shop created';
  }

  findAll() {
    return this._dummy;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopList`;
  }

  update(id: number, updateShopListDto: UpdateShopDto) {
    return `This action updates a #${id} shopList`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopList`;
  }
}
