import { IsString, Length } from "class-validator";

export class LoginDto{
    @IsString()
    @Length(6,10)
    username: string;

    @IsString()
    @Length(8,12)
    password: string;

}