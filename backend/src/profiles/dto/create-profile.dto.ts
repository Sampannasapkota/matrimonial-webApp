import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  Max,
  Length,
} from 'class-validator';
import {
  Gender,
  DietPreference,
  Religion,
  MaritalStatus,
  EducationLevel,
  EmploymentStatus,
} from '@prisma/client';

export class CreateProfileDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsString()
  @IsOptional()
  profilePic?: string;

  @IsEnum(DietPreference)
  @IsNotEmpty()
  dietPreference: DietPreference;

  @IsInt()
  @Min(18)
  @Max(80)
  @IsNotEmpty()
  ageRange: number;

  @IsDateString()
  @IsOptional()
  dateOfBirth: string;

  @IsEnum(Religion)
  @IsNotEmpty()
  religion: Religion;

  @IsInt()
  // @IsNotEmpty()
  @IsNotEmpty()
  districtId: number;

  @IsNumber()
  @Min(1.0)
  @Max(2.5)
  @IsNotEmpty()
  height: number;

  @IsEnum(MaritalStatus)
  @IsNotEmpty()
  maritalStatus: MaritalStatus;

  @IsEnum(EducationLevel)
  @IsNotEmpty()
  educationLevel: EducationLevel;

  @IsEnum(EmploymentStatus)
  @IsNotEmpty()
  employmentStatus: EmploymentStatus;

  @IsString()
  @Length(10, 300)
  // @IsNotEmpty()
  @IsOptional()
  partnerPreference: string;
}
