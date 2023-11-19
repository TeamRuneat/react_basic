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
  sido: string;

  @Prop({ required: true })
  sigungu: string;

  @Prop({ required: true })
  query: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
