import { Interests } from "@prisma/client";
import { IsEnum } from "class-validator";

export class CreateInterestDto {
    
    @IsEnum(Interests)
    interest: Interests;
}
