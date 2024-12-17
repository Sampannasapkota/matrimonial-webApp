import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DistrictsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDistrictDto: CreateDistrictDto) {
    const { provinceId, name } = createDistrictDto;

    await this.ensureProvinceExists(provinceId);

    if (await this.checkIfDistrictExists(name, provinceId)) {
      throw new BadRequestException(
        `District with name '${name}' already exists in the specified province.`,
      );
    }

    return this.prismaService.district.create({ data: createDistrictDto });
  }

  async findAll({ provinceId }: { provinceId: number }) {
    return this.prismaService.district.findMany({
      where: {
        ...(provinceId && { provinceId: +provinceId }),
      },
      include: {
        province: true,
      },
    });
  }

  async findOne(id: number) {
    return this.getDistrictById(id);
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const district = await this.getDistrictById(id);
    const { provinceId, name } = updateDistrictDto;

    if (provinceId && provinceId !== district.provinceId) {
      await this.ensureProvinceExists(provinceId);
    }

    if (
      name &&
      (await this.checkIfDistrictExists(
        name,
        provinceId || district.provinceId,
        id,
      ))
    ) {
      throw new BadRequestException(
        `District with name '${name}' already exists in the specified province.`,
      );
    }

    return this.prismaService.district.update({
      where: { id },
      data: updateDistrictDto,
    });
  }

  async remove(id: number) {
    await this.getDistrictById(id);
    return this.prismaService.district.delete({ where: { id } });
  }

  private async getDistrictById(id: number) {
    const district = await this.prismaService.district.findFirst({
      where: { id },
      include: { province: true },
    });

    if (!district) {
      throw new NotFoundException(`District with ID ${id} does not exist`);
    }

    return district;
  }

  private async ensureProvinceExists(provinceId: number) {
    const province = await this.prismaService.province.findFirst({
      where: { id: provinceId },
    });

    if (!province) {
      throw new NotFoundException(
        `Province with ID ${provinceId} does not exist`,
      );
    }
  }

  private async checkIfDistrictExists(
    name: string,
    provinceId: number,
    id?: number,
  ): Promise<boolean> {
    const district = await this.prismaService.district.findFirst({
      where: {
        name,
        provinceId,
      },
    });

    if (district && id) {
      return district.id !== id;
    }

    return !!district;
  }
}
