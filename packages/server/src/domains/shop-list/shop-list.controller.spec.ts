import { Test, TestingModule } from '@nestjs/testing';
import { ShopListController } from './shop-list.controller';
import { ShopListService } from './shop-list.service';

describe('ShopListController', () => {
  let controller: ShopListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopListController],
      providers: [ShopListService],
    }).compile();

    controller = module.get<ShopListController>(ShopListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
