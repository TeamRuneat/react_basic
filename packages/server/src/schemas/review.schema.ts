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

  @Prop({ required: true, type: [String] })
  tags: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

ReviewSchema.virtual('id')
  .set(function (v) {
    this.set({ _id: v });
  })
  .get(function (this: Review) {
    return this._id;
  });
