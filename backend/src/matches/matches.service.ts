import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MatchesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createMatchDto: CreateMatchDto) {
    const { userOneId, userTwoId } = createMatchDto;

    // Check if userOne exists
    const userOne = await this.prismaService.user.findUnique({
      where: { id: userOneId },
    });
    if (!userOne) {
      throw new BadRequestException(`User with ID ${userOneId} does not exist`);
    }

    // Check if userTwo exists
    const userTwo = await this.prismaService.user.findUnique({
      where: { id: userTwoId },
    });
    if (!userTwo) {
      throw new BadRequestException(`User with ID ${userTwoId} does not exist`);
    }

    // Create the match if both users exist
    return await this.prismaService.match.create({
      data: {
        userOneId,
        userTwoId,
        matchDate: createMatchDto.matchDate || new Date(),
      },
    });
  }

  async findAll() {
    return await this.prismaService.match.findMany();
  }

  async findOne(id: number) {
    const match = await this.prismaService.match.findUnique({
      where: { id },
    });

    if (!match) {
      throw new BadRequestException(`Match with ID ${id} not found`);
    }

    return match;
  }

  async update(id: number, updateMatchDto: UpdateMatchDto) {
    const match = await this.prismaService.match.findUnique({
      where: { id },
    });

    if (!match) {
      throw new BadRequestException(`Match with ID ${id} not found`);
    }

    return await this.prismaService.match.update({
      where: { id },
      data: updateMatchDto,
    });
  }

  async remove(id: number) {
    const match = await this.prismaService.match.findUnique({
      where: { id },
    });

    if (!match) {
      throw new BadRequestException(`Match with ID ${id} not found`);
    }

    return await this.prismaService.match.delete({
      where: { id },
    });
  }
}
