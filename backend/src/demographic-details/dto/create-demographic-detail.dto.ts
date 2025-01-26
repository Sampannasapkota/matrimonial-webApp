import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import {
  MaritalStatus,
  ResidentialStatus,
  ProvinceName,
  EducationLevel,
  EmploymentStatus,
  DietPreference,
  MotherTongue,
} from '@prisma/client';

export class CreateDemographicDetailsDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsEnum(MaritalStatus)
  @IsNotEmpty()
  maritalStatus: MaritalStatus;

  @IsEnum(ResidentialStatus)
  @IsNotEmpty()
  residentialStatus: ResidentialStatus;

  @IsEnum(ProvinceName)
  @IsNotEmpty()
  province: ProvinceName;

  @IsString()
  @IsNotEmpty()
  district: string;

  @IsEnum(EducationLevel)
  @IsNotEmpty()
  educationLevel: EducationLevel;

  @IsEnum(EmploymentStatus)
  @IsNotEmpty()
  employmentStatus: EmploymentStatus;

  @IsEnum(DietPreference)
  @IsNotEmpty()
  dietPreference: DietPreference;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsString()
  @IsOptional()
  incomeRange?: string;

  @IsEnum(MotherTongue)
  @IsNotEmpty()
  motherTongue: MotherTongue;
}

