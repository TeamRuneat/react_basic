import { FoodTypes, PriceRanges } from '../../../constants/shop';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateShopDto {
  @IsNotEmpty()
  title: string;
  // location: string;
  @IsEnum(FoodTypes)
  @IsNotEmpty()
  category: keyof typeof FoodTypes;

  @IsEnum(PriceRanges)
  @IsNotEmpty()
  priceRange: keyof typeof PriceRanges;

  @IsArray()
  tags: string[];

  @IsArray()
  @IsOptional()
  imageUrls?: string[];
}
