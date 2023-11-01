import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { validateOrReject } from 'class-validator';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shop } from '../../schemas/shop.schema';
import { toHomeShopItemDto } from './dto/home-shop-item.dto';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop.name) private shopModel: Model<Shop>) {}

  async create(createShopDto: CreateShopDto) {
    await validateOrReject(createShopDto);
    const createdModel = new this.shopModel(createShopDto);
    return createdModel.save();
  }

  async update(id: string, updateShopDto: UpdateShopDto) {
    await validateOrReject(updateShopDto);
    await this.shopModel.findByIdAndUpdate(id, updateShopDto);
  }

  async find(keyword?: string) {
    if (keyword) {
      const sanitizedKeyword = keyword.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&');
      const models = await this.shopModel.find({
        title: { $regex: sanitizedKeyword },
      });
      return models.map(toHomeShopItemDto);
    }
    return (await this.shopModel.find()).map(toHomeShopItemDto);
  }

  async findOne(id: string) {
    return toHomeShopItemDto(await this.shopModel.findById(id));
  }

  remove(id: number) {
    return `This action removes a #${id} Shop`;
  }
}
