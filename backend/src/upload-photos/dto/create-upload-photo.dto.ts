import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUploadPhotoDto {
   @IsNotEmpty()
   @IsString()
  file: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
  
}
