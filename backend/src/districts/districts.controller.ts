import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DistrictsService } from './districts.service';

@Controller('districts')
export class DistrictsController {
  constructor(private readonly districtService: DistrictsService) {}

  @Get()
  async getAllDistricts() {
    return this.districtService.getAllDistricts();
  }
  @Get(':id')
  async getDistrictById(@Param('id', ParseIntPipe) id: number) {
    return this.districtService.findOne(Number(id));
  }
}
