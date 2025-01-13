import { Gender } from '@prisma/client';
import {  IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  @Length(6,10)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 12)
  password: string;

  @IsNotEmpty()
  gender: Gender;
}
