import { Shop } from '../../../schemas/shop.schema';
import { FoodTypes, PriceRanges } from '../../../constants/shop';
import { calculateAverage } from '../../../utils/number';
import { get } from '../../../utils/object';

export class HomeShopItemDto implements Partial<Shop> {
  title: string;
  type: keyof typeof FoodTypes;
  priceRange: keyof typeof PriceRanges;
  tags: string[];
  rating: number;
  ratingCount: number;
  imageUrl: string;
  isFavorite: boolean;
}

export function toHomeShopItemDto<T extends Shop>(model: T) {
  const dto = new HomeShopItemDto();
  dto.title = model.title;
  dto.type = model.type;
  dto.priceRange = model.priceRange;
  dto.tags = model.tags;
  dto.rating = model.reviews?.length
    ? +calculateAverage(model.reviews.map(get('rating'))).toFixed(1)
    : 0;
  dto.ratingCount = model.reviews?.length || 0;
  dto.imageUrl = model.imageUrls[0];
  dto.isFavorite = false; // TODO
  return dto;
}
