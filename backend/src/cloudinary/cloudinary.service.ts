import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary, v2} from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()

export class CloudinaryService {
  async uploadImage(
    file:any
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      // toStream(file.buffer).pipe(upload);
    });
  }

  async uploadBase64(base64Image:string,folder:string='default'): Promise<UploadApiResponse | UploadApiErrorResponse> {
    try{
      return cloudinary.uploader.upload(base64Image, {
        folder: folder,
        resource_type: 'image',
      });
    }catch(error){
      throw new Error(`Failed to upload Base64 image to Cloudinary: ${error.message}`);
    }
  }
}