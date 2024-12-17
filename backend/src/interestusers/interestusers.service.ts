import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInterestuserDto } from './dto/create-interestuser.dto';

@Injectable()
export class InterestUserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInterestUserDto: CreateInterestuserDto) {
    return this.prisma.interestUser.create({
      data: {
        userId: createInterestUserDto.userId,
        interestId: createInterestUserDto.interestId,
      },
    });
  }

  async findAll() {
    return this.prisma.interestUser.findMany({
      include: {
        user: true,
        interest: true,
      },
    });
  }

  async findByUser(userId: number) {
    return this.prisma.interestUser.findMany({
      where: { userId },
      include: {
        interest: true,
      },
    });
  }

  async findByInterest(interestId: number) {
    return this.prisma.interestUser.findMany({
      where: { interestId },
      include: {
        user: true,
      },
    });
  }

  async delete(userId: number, interestId: number) {
    return this.prisma.interestUser.delete({
      where: {
        userId_interestId: {
          userId,
          interestId,
        },
      },
    });
  }
}
