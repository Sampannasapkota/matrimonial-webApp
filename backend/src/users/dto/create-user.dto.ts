import { IsBoolean, IsDateString, IsEmail, IsEnum, IsOptional, IsString, Length, Matches } from 'class-validator';
import { Gender } from '@prisma/client'; // Import your Gender enum
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @Length(2, 50)
  fullname: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dob: string;

  @IsString()
  @Length(8, 128)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]+$/, {
    message: 'Password must contain at least one letter, one number, and one special character.',
  })
  password: string;

  @IsEnum(Gender, { message: 'Gender must be either MALE, FEMALE, or OTHER' })
  gender: Gender;

  @IsBoolean()
  socialSignIn: boolean;

  @IsOptional()
  @Type(() => Object)
  profile?: {
    bio?: string;
    avatarUrl?: string;
  };

  @IsOptional()
  @Type(() => Array)
  interests?: number[]; // Array of interest IDs

  @IsOptional()
  @Type(() => Object)
  partnerPreference?: {
    ageRange?: [number, number];
    location?: string;
    hobbies?: string[];
  };
}
