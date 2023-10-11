import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema({
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: function (_, ret) {
      delete ret._id;
    },
  },
})
export class Review extends mongoose.Document {
  @Prop({ type: Number, required: true, min: 0, max: 5 })
  rating: number;

  @Prop({ required: false })
  content: string;

  @Prop({ required: false, type: [String] })
  tags: string[];
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

// NOTE 리뷰는 삭제나 수정요청을 위해 아이디가 필요할 수 있다
ReviewSchema.virtual('id')
  .set(function (v) {
    this.set({ _id: v });
  })
  .get(function (this: Review) {
    return this._id;
  });
