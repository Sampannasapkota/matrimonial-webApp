import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private readonly prismaService: PrismaService){}
  async create(createLikeDto: CreateLikeDto) {

    const {userId}= createLikeDto;
    return await this.prismaService.like.create({
      data: {
        userId,
      },
    });
  }

  async findAll() {
    return await this.prismaService.like.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.like.findUnique({
      where :{ userId: id},
    });
  }

  async update(id: number, updateLikeDto: UpdateLikeDto) {
    return await this.prismaService.like.update({
      where:{userId: id},
      data: updateLikeDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.like.delete({
      where: {userId: id},
    });
  }
}