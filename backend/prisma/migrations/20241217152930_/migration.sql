/*
  Warnings:

  - The values [BachelorDegree,MasterDegree] on the enum `EducationLevel` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EducationLevel_new" AS ENUM ('PrimaryLevel', 'SecondaryLevel', 'HigherSecondaryLevel', 'Bachelor', 'Masters', 'PhD', 'Diploma');
ALTER TABLE "Profile" ALTER COLUMN "educationStatus" TYPE "EducationLevel_new" USING ("educationStatus"::text::"EducationLevel_new");
ALTER TYPE "EducationLevel" RENAME TO "EducationLevel_old";
ALTER TYPE "EducationLevel_new" RENAME TO "EducationLevel";
DROP TYPE "EducationLevel_old";
COMMIT;
