import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FoodTypes, PriceRanges } from '../../../constants/shop';

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
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, type: [String], enum: FoodTypes })
  type: [keyof typeof FoodTypes];

  @Prop({ required: true, type: String, enum: PriceRanges })
  priceRange: keyof typeof PriceRanges;

  @Prop([String])
  tags: string[];

  @Prop({ required: true, type: [String] })
  imageUrls: string[];
  // favorite: boolean;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);

ShopSchema.virtual('id')
  .set(function (v) {
    this.set({ _id: v });
  })
  .get(function (this: Shop) {
    return this._id;
  });
