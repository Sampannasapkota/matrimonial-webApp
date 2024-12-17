import { IsInt } from "class-validator";

export class CreateInterestuserDto {
    @IsInt()
  userId: number;

  @IsInt()
  interestId: number;
}
