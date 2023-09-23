import { FoodTypes, PriceRanges } from '../../../constants/shop';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';

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

  @IsString({ each: true })
  @Transform(({ obj, key }) => obj[key].filter?.((val) => val) || obj[key])
  tags: string[];

  @IsArray()
  @IsOptional()
  imageUrls?: string[];
}
