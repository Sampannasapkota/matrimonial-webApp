import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { InterestUserService } from './interestusers.service';
import { CreateInterestuserDto } from './dto/create-interestuser.dto';

@Controller('interest-user')
export class InterestUserController {
  constructor(private readonly interestUserService: InterestUserService) {}

  @Post()
  create(@Body() createInterestUserDto: CreateInterestuserDto) {
    return this.interestUserService.create(createInterestUserDto);
  }

  @Get()
  findAll() {
    return this.interestUserService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: number) {
    return this.interestUserService.findByUser(userId);
  }

  @Get('interest/:interestId')
  findByInterest(@Param('interestId') interestId: number) {
    return this.interestUserService.findByInterest(interestId);
  }

  @Delete(':userId/:interestId')
  delete(
    @Param('userId') userId: number,
    @Param('interestId') interestId: number,
  ) {
    return this.interestUserService.delete(userId, interestId);
  }
}
