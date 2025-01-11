import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Gender } from '@prisma/client';

export class CreateUserDto {
  @IsInt()
  @IsOptional()
  roleId: number;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  fullname: string;

  
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsBoolean()
  @IsOptional()
  socialSignIn: boolean;
}
