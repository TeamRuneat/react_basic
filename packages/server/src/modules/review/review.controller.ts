import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get(':id')
  getReviews(@Param('id') id: string) {
    return this.reviewService.selectReviews(id);
  }

  @Post(':id')
  createReviews(
    @Param('id') id: string,
    @Body() createReviewDto: CreateReviewDto,
  ) {
    return this.reviewService.insertReviews(id, createReviewDto);
  }
}
