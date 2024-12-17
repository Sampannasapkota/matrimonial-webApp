import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDistrictDto {
    @IsInt()
    @IsNotEmpty()
    provinceId: number;
  
    @IsString()
    @IsNotEmpty()
    name: string;
}
