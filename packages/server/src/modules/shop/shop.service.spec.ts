import { Test, TestingModule } from '@nestjs/testing';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { FoodTypes, PriceRanges } from '../../constants/shop';
import { UpdateShopDto } from './dto/update-shop.dto';

describe('ShopService', () => {
  let service: ShopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopService],
    }).compile();

    service = module.get<ShopService>(ShopService);
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

  it('update: 기존에 추가된 Shop 이 없는 id 가 입력되면 에러를 반환한다', async () => {
    const dto = new UpdateShopDto();
    await expect(service.update(-1, dto)).rejects.toBeDefined();
  });

  it('update: 기존에 추가된 Shop 이 있는 경우는 해당 객체의 정보를 변경한다(WIP)', async () => {
    const dto = new UpdateShopDto();
    dto.title = 'updated';
    await expect(service.update(1, dto)).resolves.toBeDefined();
  });
});
