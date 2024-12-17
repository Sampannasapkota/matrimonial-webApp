import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';

@Injectable()
export class InterestsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createInterestDto: CreateInterestDto) {
    const { name } = createInterestDto;

    if (await this.checkIfInterestExists(name)) {
      throw new BadRequestException(`Interest with name '${name}' already exists.`);
    }

    return this.prismaService.interest.create({ data: createInterestDto });
  }

  async findAll() {
    return this.prismaService.interest.findMany({
      // include: { users: true },
    });
  }

  async findOne(id: number) {
    return this.getInterestById(id);
  }

  async update(id: number, updateInterestDto: UpdateInterestDto) {
    const { name } = updateInterestDto;

    if (name && (await this.checkIfInterestExists(name, id))) {
      throw new BadRequestException(`Interest with name '${name}' already exists.`);
    }

    return this.prismaService.interest.update({
      where: { id },
      data: updateInterestDto,
    });
  }

  async remove(id: number) {
    await this.getInterestById(id);
    return this.prismaService.interest.delete({ where: { id } });
  }

  private async getInterestById(id: number) {
    const interest = await this.prismaService.interest.findFirst({
      where: { id },
      include: { users: true },
    });

    if (!interest) {
      throw new NotFoundException(`Interest with ID ${id} does not exist.`);
    }

    return interest;
  }

  private async checkIfInterestExists(name: string, id?: number): Promise<boolean> {
    const interest = await this.prismaService.interest.findFirst({
      where: { name },
    });

    if (interest && id) {
      return interest.id !== id;
    }

    return !!interest;
  }
}
