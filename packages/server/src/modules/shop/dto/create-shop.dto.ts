import { FoodTypes, PriceRanges } from '../../../constants/shop';
import { IsArray, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateShopDto {
  @IsNotEmpty()
  title: string;
  // location: string;
  @IsEnum(FoodTypes)
  @IsNotEmpty()
  type: keyof typeof FoodTypes;

  @IsEnum(PriceRanges)
  @IsNotEmpty()
  priceRange: keyof typeof PriceRanges;

  @IsArray()
  tags: string[];

  @IsArray()
  @IsOptional()
  imageUrls?: string[];
}
