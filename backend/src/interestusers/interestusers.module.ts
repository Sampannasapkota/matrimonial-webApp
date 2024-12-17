import { Module } from '@nestjs/common';
import { InterestUserService } from './interestusers.service';
import { InterestUserController } from './interestusers.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InterestUserController],
  providers: [InterestUserService,PrismaService],
})
export class InterestusersModule {}
