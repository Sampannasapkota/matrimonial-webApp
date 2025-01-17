import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMatchDto {
  @IsInt()
  @Type(() => Number)
  userOneId: number;

  @IsInt()
  @Type(() => Number)
  userTwoId: number;

  @IsOptional()
  @Type(() => Date)
  matchDate?: Date;
}
