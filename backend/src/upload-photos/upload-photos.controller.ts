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
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createUploadPhotoDto: CreateUploadPhotoDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new Error('File is required');
    }

    const uploadResult = await this.cloudinaryService.uploadImage(file);
    createUploadPhotoDto.file = uploadResult.secure_url;

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
  async update(
    @Param('id') id: string,
    @Body() updateUploadPhotoDto: UpdateUploadPhotoDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      const uploadResult = await this.cloudinaryService.uploadImage(file);
      updateUploadPhotoDto.file = uploadResult.secure_url;
    }

    return this.uploadPhotosService.update(+id, updateUploadPhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadPhotosService.remove(+id);
  }
}
