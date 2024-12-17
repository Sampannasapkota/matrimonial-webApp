/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL,
ALTER COLUMN "roleId" DROP NOT NULL;
