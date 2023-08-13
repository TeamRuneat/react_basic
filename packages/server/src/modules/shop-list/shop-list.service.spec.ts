import { Test, TestingModule } from '@nestjs/testing';
import { ShopListService } from './shop-list.service';

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
});
