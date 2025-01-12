import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateReportDto {
    @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  reportId: number;

  @IsString()
  @IsNotEmpty()
  reportContent: string; 
}

