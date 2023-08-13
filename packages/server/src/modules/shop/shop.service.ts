import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './entities/shop.entity';
import { validateOrReject } from 'class-validator';

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

  async create(createShopDto: CreateShopDto) {
    await validateOrReject(createShopDto);
    return 'shop created';
  }

  async update(id: number, updateShopDto: UpdateShopDto) {
    await validateOrReject(updateShopDto);

    const targetEntity = this.findOne(id);
    if (targetEntity) {
      const nextEntity: Shop = Object.assign({}, targetEntity, updateShopDto);
      console.log(`${id} Shop updated to`, nextEntity);
      return `This action updates a #${id} Shop`;
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
    return `This action removes a #${id} Shop`;
  }
}
