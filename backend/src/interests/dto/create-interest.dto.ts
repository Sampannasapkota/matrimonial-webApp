import { Interests } from "@prisma/client";
import { IsEnum, IsInt } from "class-validator";

export class CreateInterestDto {
    @IsInt()
    userId: number;

    @IsEnum(Interests, {each:true})
    interests: Interests[];
}
