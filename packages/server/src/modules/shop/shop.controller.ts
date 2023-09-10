import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { AuthGuard } from '../../auth/auth.guard';
import { UpdateShopDto } from './dto/update-shop.dto';

@Controller('shop-list')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createShopListDto: CreateShopDto) {
    return this.shopService.create(createShopListDto);
  }

  @Get()
  findAll() {
    return this.shopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateShopListDto: UpdateShopDto) {
    return this.shopService.update(id, updateShopListDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.shopService.remove(+id);
  // }
}
