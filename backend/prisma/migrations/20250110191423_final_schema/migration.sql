/*
  Warnings:

  - You are about to drop the column `fanilyValues` on the `FamilyDetails` table. All the data in the column will be lost.
  - Added the required column `familyValues` to the `FamilyDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FamilyDetails" DROP COLUMN "fanilyValues",
ADD COLUMN     "familyValues" "FamilyValue" NOT NULL;
