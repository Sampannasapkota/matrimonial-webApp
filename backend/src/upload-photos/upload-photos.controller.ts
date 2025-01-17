import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadPhotosService } from './upload-photos.service';
import { CreateUploadPhotoDto } from './dto/create-upload-photo.dto';
import { UpdateUploadPhotoDto } from './dto/update-upload-photo.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@Controller('upload-photos')
export class UploadPhotosController {
  constructor(private readonly uploadPhotosService: UploadPhotosService) {}

  @Post()
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createUploadPhotoDto: CreateUploadPhotoDto, @UploadedFile() file: Express.Multer.File) {
    return this.uploadPhotosService.create(createUploadPhotoDto, file);
  }

  @Get()
  findAll() {
    return this.uploadPhotosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadPhotosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadPhotoDto: UpdateUploadPhotoDto) {
    return this.uploadPhotosService.update(+id, updateUploadPhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadPhotosService.remove(+id);
  }
}
