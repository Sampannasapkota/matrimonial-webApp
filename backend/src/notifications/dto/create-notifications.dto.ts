import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @IsInt()
  userId: number;

  @IsString()
  @IsNotEmpty()
  message: string;
}
