import { FoodTypes, PriceRanges } from '../../../constants/shop';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Shop } from '../../../schemas/shop.schema';
import { Location } from '../../../schemas/location.schema';

export class CreateShopDto implements Partial<Shop> {
  @IsNotEmpty()
  title: string;

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

  @IsOptional()
  @Transform(({ obj }) => {
    if (!obj.location) return;
    return JSON.parse(obj.location);
  })
  location: Location;
}
