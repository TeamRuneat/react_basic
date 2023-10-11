import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop } from '../../schemas/shop.schema';
import mongoose, { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from '../../schemas/review.schema';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(Shop.name) private shopModel: Model<Shop>) {}

  async selectReviews(shopId: string) {
    if (!mongoose.Types.ObjectId.isValid(shopId))
      throw new BadRequestException('invalid shopId');

    const targetShop = await this.selectShop(shopId);
    return targetShop ? targetShop.reviews : [];
  }

  async insertReviews(shopId: string, createReviewDto: CreateReviewDto) {
    const targetShop = await this.selectShop(shopId);
    targetShop.reviews.push(createReviewDto as Review);
    return targetShop.save();
  }

  private selectShop(shopId: string) {
    if (!mongoose.Types.ObjectId.isValid(shopId))
      throw new BadRequestException('invalid shopId');

    return this.shopModel.findById(shopId);
  }
}
