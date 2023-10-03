import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { Review } from '../../../schemas/review.schema';

export class CreateReviewDto implements Partial<Review> {
  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @IsOptional()
  content: string;

  @IsOptional()
  @IsString({ each: true })
  tags: string[];
}
