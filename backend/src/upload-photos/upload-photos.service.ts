import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUploadPhotoDto } from './dto/create-upload-photo.dto';
import { UpdateUploadPhotoDto } from './dto/update-upload-photo.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class UploadPhotosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(createUploadPhotoDto: CreateUploadPhotoDto, file: Express.Multer.File) {
    const { userId } = createUploadPhotoDto;

    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const uploadResult = await this.cloudinaryService.uploadFile(file);

    return this.prisma.uploadPhoto.create({
      data: {
        file: uploadResult.secure_url,
        userId: userId,
      },
    });
  }

  findAll() {
    return this.prisma.uploadPhoto.findMany({
      include: { user: true },
    });
  }

  async findOne(id: number) {
    const uploadPhoto = await this.prisma.uploadPhoto.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!uploadPhoto) {
      throw new NotFoundException(`UploadPhoto with ID ${id} not found`);
    }

    return uploadPhoto;
  }

  async update(id: number, updateUploadPhotoDto: UpdateUploadPhotoDto) {
    const uploadPhoto = await this.prisma.uploadPhoto.findUnique({ where: { id } });

    if (!uploadPhoto) {
      throw new NotFoundException(`UploadPhoto with ID ${id} not found`);
    }

    return this.prisma.uploadPhoto.update({
      where: { id },
      data: updateUploadPhotoDto,
    });
  }

  async remove(id: number) {
    const uploadPhoto = await this.prisma.uploadPhoto.findUnique({ where: { id } });

    if (!uploadPhoto) {
      throw new NotFoundException(`UploadPhoto with ID ${id} not found`);
    }

    await this.prisma.uploadPhoto.delete({ where: { id } });
    return { message: `UploadPhoto with ID ${id} has been deleted` };
  }
}
