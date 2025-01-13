import { IsInt, IsOptional } from "class-validator";

export class CreateMatchDto {
  @IsInt()
  userOneId: number;
  @IsInt()
  userTwoId: number;
  @IsOptional()
  matchDate?: Date;
}

/* 
model Match {
  id        Int      @id @default(autoincrement())
  userOneId Int
  userOne   User     @relation("UserOneMatches", fields: [userOneId], references: [id])
  userTwoId Int
  userTwo   User     @relation("UserTwoMatches", fields: [userTwoId], references: [id])
  matchDate DateTime @default(now())

  User User[] @relation("UserMatches")
}
*/
