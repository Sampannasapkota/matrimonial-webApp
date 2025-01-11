/*
  Warnings:

  - You are about to drop the column `familyType` on the `FamilyDetails` table. All the data in the column will be lost.
  - You are about to drop the column `educationStatus` on the `Profile` table. All the data in the column will be lost.
  - The primary key for the `_UserMatches` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_UserMatches` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ethnicity` to the `FamilyDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fanilyValues` to the `FamilyDetails` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Ethnicity" AS ENUM ('Brahmin', 'Chhetri', 'Newar', 'Gurung', 'Magar', 'Rai', 'Limbu', 'Tamang', 'Sherpa', 'Thakuri', 'Dalit', 'Madhesi', 'Janajati', 'Others');

-- CreateEnum
CREATE TYPE "FamilyValue" AS ENUM ('Traditional', 'Modern', 'Liberal');

-- CreateEnum
CREATE TYPE "MotherTongue" AS ENUM ('Nepali', 'Newari', 'Maithili', 'Bhojpuri', 'Tharu', 'Tamang', 'Sherpa', 'Gurung', 'Magar', 'Rai', 'Limbu', 'Others');

-- AlterTable
ALTER TABLE "FamilyDetails" DROP COLUMN "familyType",
ADD COLUMN     "ethnicity" "Ethnicity" NOT NULL,
ADD COLUMN     "fanilyValues" "FamilyValue" NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "educationStatus",
ADD COLUMN     "educationLevel" "EducationLevel" NOT NULL DEFAULT 'PrimaryLevel',
ADD COLUMN     "familyType" "FamilyType" NOT NULL DEFAULT 'Nuclear',
ADD COLUMN     "incomeRange" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "motherTongue" "MotherTongue" NOT NULL DEFAULT 'Nepali';

-- AlterTable
ALTER TABLE "_UserMatches" DROP CONSTRAINT "_UserMatches_AB_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "_UserMatches_AB_unique" ON "_UserMatches"("A", "B");
