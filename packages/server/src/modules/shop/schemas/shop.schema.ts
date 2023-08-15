import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FoodTypes, PriceRanges } from '../../../constants/shop';

export type ShopDocument = HydratedDocument<Shop>;

@Schema({ collection: 'shop' })
export class Shop {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: '_id' })
  id: number;

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
