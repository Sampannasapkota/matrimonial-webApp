import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MatchesService {

  constructor(private prismaService: PrismaService) {}

  async create(createMatchDto: CreateMatchDto) {
    
    return this.prismaService.match.create({
      data: {
        userOneId: createMatchDto.userOneId,
        userTwoId: createMatchDto.userTwoId,
        matchDate: createMatchDto.matchDate || new Date(),
      },
    });
  }

  async findAll() {
    return this.prismaService.match.findMany();
  }

  async findOne(id: number) {
    const match = await this.prismaService.match.findUnique({
      where: {
        id,
      },
    });
    if (!match) {
      throw new NotFoundException(`Match with ID ${id} not found`);
    }
    return match;
  }

  async update(id: number, updateMatchDto: UpdateMatchDto) {
    const match= await this.prismaService.match.findUnique({
      where: {
        id,
      },
    });
    if (!match) {
      throw new NotFoundException(`Match with ID ${id} not found`);
    }
    return this.prismaService.match.update({
      where: {
        id,
      },
      data: updateMatchDto,
    });
  }

  async remove(id: number) {
    const match= await this.prismaService.match.findUnique({
      where: {
        id,
      },
    });
    if (!match) {
      throw new NotFoundException(`Match with ID ${id} not found`);
    }
    return this.prismaService.match.delete({
      where: {
        id,
      },
    });
  }
}
