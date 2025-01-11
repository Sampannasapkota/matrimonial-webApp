import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateMessageDto {

    @IsInt()
  senderId: number;

  @IsInt()
  receiverId: number;

  @IsString()
  messageContent: string;

  @IsOptional()
  @IsString()
  sentAt?: string;

  @IsOptional()
  @IsString()
  readAt?: string;
}
