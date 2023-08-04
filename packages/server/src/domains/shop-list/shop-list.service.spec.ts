import { Test, TestingModule } from '@nestjs/testing';
import { ShopListService } from './shop-list.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { FoodTypes, PriceRanges } from '../../constants/shop';

describe('ShopListService', () => {
  let service: ShopListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopListService],
    }).compile();

    service = module.get<ShopListService>(ShopListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('insert: 모든 값이 존재하면 문제없이 추가된다', async () => {
    const dto = new CreateShopDto();
    dto.title = 'hello';
    dto.category = FoodTypes.ASIAN;
    dto.priceRange = PriceRanges.OVER_THREE_THOUSANDS;
    dto.tags = [];

    await expect(service.create(dto)).resolves.toBeDefined();
  });

  it('insert: 하나라도 validation 을 통과하지 못하면, 에러를 발생시킨다', async () => {
    const dto = new CreateShopDto();

    await expect(service.create(dto)).rejects.toBeDefined();
  });
});
