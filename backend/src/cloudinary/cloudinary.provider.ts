import { ConfigOptions, v2 } from 'cloudinary';
import { CLOUDINARY } from 'src/helpers/cloudinary';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): ConfigOptions => {
    return v2.config({
      cloud_name: 'dhjranlh1',
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  },
};