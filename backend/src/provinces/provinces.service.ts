import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProvincesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllProvinces() {
    return this.prismaService.province.findMany({
      include: {
        districts: true,
        demographicDetails: true,
      },
    });
  }
  async findOne(id: number) {
    const province = await this.prismaService.province.findUnique({
      where: { id },
      include: {
        demographicDetails: true,
      },
    });

    if (!province) {
      throw new NotFoundException(`Province with ID ${id} not found`);
    }

    return province;
  }
}
