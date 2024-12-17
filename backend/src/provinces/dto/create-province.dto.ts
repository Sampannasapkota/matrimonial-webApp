import { ProvinceName } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateProvinceDto {
    @IsNotEmpty()
    @IsEnum(ProvinceName)
    provinceName :ProvinceName;
}
