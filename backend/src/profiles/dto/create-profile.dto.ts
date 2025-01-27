import {
  Gender,
  DietPreference,
  Religion,
  ResidentialStatus,
  FamilyType,
  MaritalStatus,
  EducationLevel,
  EmploymentStatus,
  MotherTongue,
  ProvinceName,
} from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDateString,
} from 'class-validator';

export class CreateProfileDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @IsEnum(DietPreference)
  @IsNotEmpty()
  dietPreference: DietPreference;

  @IsInt()
  @IsNotEmpty()
  ageRange: number;

  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: string;

  @IsEnum(Religion)
  @IsNotEmpty()
  religion: Religion;

  @IsString()
  @IsNotEmpty()
  district: string;

  @IsEnum(ProvinceName)
  @IsNotEmpty()
  province: ProvinceName;

  @IsEnum(ResidentialStatus)
  @IsNotEmpty()
  residentialStatus: ResidentialStatus;

  @IsEnum(FamilyType)
  @IsNotEmpty()
  familyType: FamilyType;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsInt()
  @IsNotEmpty()
  incomeRange: string;

  @IsEnum(MaritalStatus)
  @IsNotEmpty()
  maritalStatus: MaritalStatus;

  @IsEnum(EducationLevel)
  @IsNotEmpty()
  educationLevel: EducationLevel;

  @IsEnum(EmploymentStatus)
  @IsNotEmpty()
  employmentStatus: EmploymentStatus;

  @IsEnum(MotherTongue)
  @IsNotEmpty()
  motherTongue: MotherTongue;

}
