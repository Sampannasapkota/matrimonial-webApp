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
    // Fetch all matches with related user details
    return await this.prismaService.match.findMany({
      include: {
        userOne: true,
        userTwo: true,
      },
    });
  }

  async findOne(userOneId: number, userTwoId: number) {
    // Find match by composite ID
    const match = await this.prismaService.match.findUnique({
      where: { userOneId_userTwoId: { userOneId, userTwoId } },
      include: {
        userOne: true,
        userTwo: true,
      },
    });

    if (!match) {
      throw new BadRequestException(
        `Match between users ${userOneId} and ${userTwoId} not found`
      );
    }

    return match;
  }

  async update(userOneId: number, userTwoId: number, updateMatchDto: UpdateMatchDto) {
    // Check if the match exists
    const match = await this.prismaService.match.findUnique({
      where: { userOneId_userTwoId: { userOneId, userTwoId } },
    });

    if (!match) {
      throw new BadRequestException(
        `Match between users ${userOneId} and ${userTwoId} not found`
      );
    }

    // Update the match
    return await this.prismaService.match.update({
      where: { userOneId_userTwoId: { userOneId, userTwoId } },
      data: updateMatchDto,
    });
  }

  async remove(userOneId: number, userTwoId: number) {
    // Check if the match exists
    const match = await this.prismaService.match.findUnique({
      where: { userOneId_userTwoId: { userOneId, userTwoId } },
    });

    if (!match) {
      throw new BadRequestException(
        `Match between users ${userOneId} and ${userTwoId} not found`
      );
    }

    // Delete the match
    return await this.prismaService.match.delete({
      where: { userOneId_userTwoId: { userOneId, userTwoId } },
    });
  }
}
