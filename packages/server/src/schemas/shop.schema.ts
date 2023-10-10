import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FoodTypes, PriceRanges } from '../constants/shop';
import { Review, ReviewSchema } from './review.schema';
import { Location, LocationSchema } from './location.schema';

export type ShopDocument = HydratedDocument<Shop>;

@Schema({
  autoIndex: true,
  collection: 'shop',
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: function (_, ret) {
      delete ret._id;
    },
  },
})
export class Shop extends mongoose.Document {
  /*
   * 상점명
   */
  @Prop({ required: true })
  title: string;

  /*
   * 주로 파는 음식의 종류 (한식, 양식..)
   */
  @Prop({ required: true, type: String, enum: FoodTypes })
  type: keyof typeof FoodTypes; // category

  /*
   * 주 가격대
   * TODO 이 가격대는 유저가 입력할 것이 아니라, 메뉴를 제공하고 메뉴들의 평균치를 내는 것이 낫지 않을까?
   */
  @Prop({ required: true, type: String, enum: PriceRanges })
  priceRange: keyof typeof PriceRanges;

  @Prop([String])
  tags: string[];

  @Prop({ required: true, type: [String] })
  imageUrls: string[];

  @Prop({ type: [ReviewSchema], default: [] })
  reviews: Review[];

  @Prop({ type: LocationSchema })
  location: Location;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);

ShopSchema.virtual('id')
  .set(function (v) {
    this.set({ _id: v });
  })
  .get(function (this: Shop) {
    return this._id;
  });
