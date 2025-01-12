import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InterestsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createInterestDto: CreateInterestDto) {
    return this.prismaService.interest.create({
      data: {
        interest: createInterestDto.interest,
      },
    });
  }

  findAll() {
    return this.prismaService.interest.findMany();
  }

  async findOne(id: number) {
    const interest= await this.prismaService.interest.findUnique({
      where: {
        id
      },
    });
    if (!interest) {
      throw new NotFoundException(`Interest with id ${id} not found`);
    }
    return interest;
  }

  async update(id: number, updateInterestDto: UpdateInterestDto) {
   const interest= await this.prismaService.interest.findUnique({
    where:{id},
   });
   if(!interest){
    throw new NotFoundException(`Interest with id ${id} not found`);
   }
   return this.prismaService.interest.update({
    where:{id},
    data:{
      interest: updateInterestDto.interest,
    },
   });
  }

  async remove(id: number) {
    const interest= await this.prismaService.interest.findUnique({
      where:{id},
    });
    if(!interest){
      throw new NotFoundException(`Interest with id ${id} not found`)
    }
    return this.prismaService.interest.delete({
      where: {id},
    });
  }
}
