import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DistrictsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllDistricts() {
    return this.prismaService.district.findMany({
      include: {
        province: true,
        demographicDetails: true,
      },
    });
  }
  async findOne(id: number) {
    const district = await this.prismaService.district.findUnique({
      where: { id },
      include: {
        province: true,
        demographicDetails: true,
      },
    });

    if (!district) {
      throw new NotFoundException(`District with ID ${id} not found`);
    }

    return district;
  }
}
