

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  UploadApiErrorResponse,
  UploadApiResponse,
  v2 as cloudinary,
  v2,
} from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
  constructor(private readonly prismaService: PrismaService) {}
  async uploadImage(
    file: any,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      // toStream(file.buffer).pipe(upload);
    });
  }

  async uploadBase64(
    userId: number,
    base64Image: string[],
    folder: string = 'default',
  ): Promise<any> {
    try {
      let photos = [];

      await Promise.all(
        base64Image?.map(async (i) => {
          const result = await cloudinary.uploader.upload(
            `data:image/jpeg;base64,${i}`,
            {
              folder: folder,
              resource_type: 'image',
            },
          );

          photos.push({ userId, image_url: result.secure_url });
        }),
      );

      return await this.prismaService.uploadPhoto.createMany({
        data: photos,
        skipDuplicates: true,
      });
    } catch (error) {
      throw new Error(
        `Failed to upload Base64 image to Cloudinary: ${error.message}`,
      );
    }
  }
}
