import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LocationDocument = HydratedDocument<Location>;

/*
 * Location 에는 ID 가 없으며, Shop document 의 정보로 사용된다
 */
@Schema({ _id: false })
export class Location extends mongoose.Document {
  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  stateOrProvince: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: false })
  address: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
