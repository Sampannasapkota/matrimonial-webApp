import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { capitalizeFirstLetterOfEachWordInAphrase } from 'src/helpers/capitalize';
import { $Enums, ProvinceName } from '@prisma/client';

@Injectable()
export class ProvincesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProvinceDto: CreateProvinceDto) {
    const capitalizedProvinceName = capitalizeFirstLetterOfEachWordInAphrase(
      createProvinceDto.provinceName,
    );
    const validProvinceNames: $Enums.ProvinceName[] = [
      'Bagmati',
      'Gandaki',
      'Koshi',
      'Karnali',
      'Lumbini',
      'Madhesh',
      'Sudurpaschim',
    ];
    if (!validProvinceNames.includes(capitalizedProvinceName as ProvinceName)) {
      throw new BadRequestException(
        `Invalid province name: ${capitalizedProvinceName}`,
      );
    }
    createProvinceDto.provinceName = capitalizedProvinceName as ProvinceName;
    if (await this.checkIfProvinceExist(createProvinceDto.provinceName)) {
      throw new BadRequestException(
        `Province ${createProvinceDto.provinceName} has already been taken`,
      );
    }
    return this.prismaService.province.create({ data: createProvinceDto });
  }
  async findAll() {
    return this.prismaService.province.findMany();
  }
  async findOne(id: number) {
    return this.getProvinceById(id);
  }
  async update(id: number, updateProvinceDto: UpdateProvinceDto) {
    await this.getProvinceById(id);
    const capitalizedProvinceName = capitalizeFirstLetterOfEachWordInAphrase(
      updateProvinceDto.provinceName,
    );
    const validProvinceNames: $Enums.ProvinceName[] = [
      'Bagmati',
      'Gandaki',
      'Koshi',
      'Karnali',
      'Lumbini',
      'Madhesh',
      'Sudurpaschim',
    ];
    if (!validProvinceNames.includes(capitalizedProvinceName as ProvinceName)) {
      throw new BadRequestException(
        `Invalid province name: ${capitalizedProvinceName}`,
      );
    }
    updateProvinceDto.provinceName = capitalizedProvinceName as ProvinceName;
    if (await this.checkIfProvinceExist(updateProvinceDto.provinceName, id)) {
      throw new BadRequestException(
        `Province ${updateProvinceDto.provinceName} has already been taken`,
      );
    }
    return this.prismaService.province.update({
      where: { id },
      data: updateProvinceDto,
    });
  }
  async remove(id: number) {
    await this.getProvinceById(id);
    return this.prismaService.province.delete({ where: { id } });
  }
  private async getProvinceById(id: number) {
    const province = await this.prismaService.province.findFirst({
      where: { id },
    });
    if (!province) {
      throw new NotFoundException(`Province with ID ${id} does not exist`);
    }
    return province;
  }
  private async checkIfProvinceExist(
    provinceName: string,
    id?: number,
  ): Promise<boolean> {
    const formattedProvinceName = capitalizeFirstLetterOfEachWordInAphrase(provinceName) as $Enums.ProvinceName;
    const province = await this.prismaService.province.findFirst({
      where: {  provinceName: formattedProvinceName  },
    });
    if (province && id) {
      return province.id !== id;
    }
    return !!province;
  }
}
