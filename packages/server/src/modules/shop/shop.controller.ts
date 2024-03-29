import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { AuthGuard } from '../../auth/auth.guard';
import { UpdateShopDto } from './dto/update-shop.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { RESOURCE_DOMAIN_URL } from '../../constants/urls';

@Controller('shop-list')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FilesInterceptor('images'))
  create(
    @Body() _createShopListDto: CreateShopDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: /image\/*/ })],
        fileIsRequired: false,
      }),
    )
    images?: Array<Express.MulterS3.File>,
  ) {
    // NOTE form-data 에서 발생한 null prototype object 를 Object prototype based object 로 만들기 위함
    const createShopListDto = Object.assign({}, _createShopListDto, {
      imageUrls: images?.map(({ key }) => `${RESOURCE_DOMAIN_URL}${key}`) || [],
    });
    return this.shopService.create(createShopListDto);
  }

  @Get()
  findAll() {
    return this.shopService.find();
  }

  @Get('search')
  find(@Query('keyword') keyword: string) {
    return this.shopService.find(keyword);
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
