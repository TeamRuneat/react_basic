import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ShopList } from './entities/shop.entity';
import { validateOrReject } from 'class-validator';

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

  async update(id: number, updateShopListDto: UpdateShopDto) {
    await validateOrReject(updateShopListDto);

    const targetEntity = this.findOne(id);
    if (targetEntity) {
      const nextEntity: ShopList = Object.assign(
        {},
        targetEntity,
        updateShopListDto,
      );
      console.log(`${id} shopList updated to`, nextEntity);
      return `This action updates a #${id} shopList`;
    } else {
      throw new NotFoundException();
    }
  }

  findAll() {
    return this._dummy;
  }

  findOne(id: number) {
    return this._dummy.find((shop) => shop.id === id);
  }

  remove(id: number) {
    return `This action removes a #${id} shopList`;
  }
}
