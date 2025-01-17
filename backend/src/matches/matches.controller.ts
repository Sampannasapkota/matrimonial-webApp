import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  async create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchesService.create(createMatchDto);
  }

  @Get()
  async findAll() {
    return this.matchesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Param('userTwoId') userTwoId: string) {
    return this.matchesService.findOne(+id, +userTwoId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Param('userTwoId') userTwoId: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchesService.update(+id, +userTwoId, updateMatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Param('userTwoId') userTwoId: string) {
    return this.matchesService.remove(+id, +userTwoId);
  }
}
