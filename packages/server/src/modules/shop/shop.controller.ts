import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shop-list')
export class ShopController {
  constructor(private readonly shopListService: ShopService) {}

  // @Post()
  // create(@Body() createShopListDto: CreateShopDto) {
  //   return this.shopListService.create(createShopListDto);
  // }

  @Get()
  findAll() {
    return this.shopListService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.shopListService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateShopListDto: UpdateShopDto,
  // ) {
  //   return this.shopListService.update(+id, updateShopListDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.shopListService.remove(+id);
  // }
}
