import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadPhotosService } from './upload-photos.service';
import { CreateUploadPhotoDto } from './dto/create-upload-photo.dto';
import { UpdateUploadPhotoDto } from './dto/update-upload-photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Controller('upload-photos')
export class UploadPhotosController {
  constructor(
    private readonly uploadPhotosService: UploadPhotosService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  uploadImage(@Body() dto: UpdateUploadPhotoDto, @Body('userId') userId: string) {
    return this.cloudinaryService.uploadBase64(Number(userId), [dto.image_url]);
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
  async update(
    @Param('id') id: string,
    @Body() updateUploadPhotoDto: UpdateUploadPhotoDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      const uploadResult = await this.cloudinaryService.uploadImage(file);
      updateUploadPhotoDto.image_url = uploadResult.secure_url;
    }

    return this.uploadPhotosService.update(+id, updateUploadPhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadPhotosService.remove(+id);
  }
}
