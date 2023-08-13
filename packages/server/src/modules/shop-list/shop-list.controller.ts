import { Controller, Get } from '@nestjs/common';
import { ShopListService } from './shop-list.service';

@Controller('shop-list')
export class ShopListController {
  constructor(private readonly shopListService: ShopListService) {}

  // @Post()
  // create(@Body() createShopListDto: CreateShopListDto) {
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
  //   @Body() updateShopListDto: UpdateShopListDto,
  // ) {
  //   return this.shopListService.update(+id, updateShopListDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.shopListService.remove(+id);
  // }
}
