import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './entities/shop.entity';

const createDummy = (id: number): Shop => ({
  id,
  title: '어쭈구리밥상',
  type: ['한식', '백반'],
  rating: 3.7,
  ratingCount: 15,
  tags: ['순한맛', '집밥'],
  averagePrice: 10000,
});
@Injectable()
export class ShopService {
  private _dummy: Shop[] = Array.from({ length: 10 }).map((_, index) =>
    createDummy(index),
  );

  create(createShopListDto: CreateShopDto) {
    return 'This action adds a new shopList';
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
