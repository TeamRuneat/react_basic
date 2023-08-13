import { Injectable } from '@nestjs/common';
import { CreateShopListDto } from './dto/create-shop-list.dto';
import { UpdateShopListDto } from './dto/update-shop-list.dto';
import { ShopList } from './entities/shop-list.entity';

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

  create(createShopListDto: CreateShopListDto) {
    return 'This action adds a new shopList';
  }

  findAll() {
    return this._dummy;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopList`;
  }

  update(id: number, updateShopListDto: UpdateShopListDto) {
    return `This action updates a #${id} shopList`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopList`;
  }
}
