import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProvincesService } from './provinces.service';

@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provinceService: ProvincesService) {}

  @Get()
  async getAllProvinces() {
    return this.provinceService.getAllProvinces();
  }
  @Get(':id')
    async getProvinceById(@Param('id', ParseIntPipe) id: number) {
      return this.provinceService.findOne(Number(id));
    }
}
