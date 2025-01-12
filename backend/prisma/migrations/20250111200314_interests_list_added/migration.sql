/*
  Warnings:

  - You are about to drop the column `name` on the `Interest` table. All the data in the column will be lost.
  - Added the required column `interest` to the `Interest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Interests" AS ENUM ('Animals', 'Travel', 'Food', 'Sports', 'Art', 'Movie', 'Music', 'Dancing', 'Singing', 'Comedy', 'Beauty', 'Science', 'Reading', 'Technology', 'Cooking', 'Fitness', 'Shopping', 'Writing', 'Business', 'Others');

-- DropIndex
DROP INDEX "Interest_name_key";

-- AlterTable
ALTER TABLE "Interest" DROP COLUMN "name",
ADD COLUMN     "interest" "Interests" NOT NULL;
