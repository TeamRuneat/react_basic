import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { validateOrReject } from 'class-validator';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shop } from './schemas/shop.schema';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop.name) private shopModel: Model<Shop>) {}

  async create(createShopDto: CreateShopDto) {
    await validateOrReject(createShopDto);
    const createdCat = new this.shopModel(createShopDto);
    return createdCat.save();
  }

  async update(id: number, updateShopDto: UpdateShopDto) {
    await validateOrReject(updateShopDto);
    await this.shopModel.findByIdAndUpdate(id, updateShopDto);
  }

  findAll() {
    return this.shopModel.find().exec();
  }

  findOne(id: number) {
    return this.shopModel.find((shop) => shop.id === id);
  }

  remove(id: number) {
    return `This action removes a #${id} Shop`;
  }
}
