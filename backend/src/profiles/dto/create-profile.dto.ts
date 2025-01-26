import {
  IsInt,
  IsString,
  IsOptional,
  IsEnum,
  IsDate,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
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
} from '@prisma/client';

export class CreateProfileDto {
  @IsInt()
  userId: number;

  @IsEnum(Gender)
  gender: Gender;

  @IsOptional()
  @IsString()
  profilePic?: string;

  @IsEnum(DietPreference)
  dietPreference: DietPreference;

  @IsInt()
  @Min(1)
  @Max(120)
  ageRange: number;

  @IsString()
  dateOfBirth: string;

  @IsEnum(Religion)
  religion: Religion;

  @IsString()
  district: string;

  @IsEnum(ResidentialStatus)
  residentialStatus: ResidentialStatus = ResidentialStatus.NepaliCitizen;

  @IsEnum(FamilyType)
  familyType: FamilyType = FamilyType.Nuclear;

  @IsNumber()
  height: number;

  @IsInt()
  @Min(0)
  incomeRange: number = 0;

  @IsEnum(MaritalStatus)
  maritalStatus: MaritalStatus;

  @IsEnum(EducationLevel)
  educationLevel: EducationLevel = EducationLevel.PrimaryLevel;

  @IsEnum(EmploymentStatus)
  employmentStatus: EmploymentStatus;

  @IsEnum(MotherTongue)
  motherTongue: MotherTongue = MotherTongue.Nepali;

  @IsString()
  partnerPreference: string;

  @IsOptional()
  @IsDate()
  createdAt?: Date = new Date();

  @IsOptional()
  @IsDate()
  updatedAt?: Date = new Date();
}
