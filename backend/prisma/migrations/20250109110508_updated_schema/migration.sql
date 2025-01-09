-- CreateEnum
CREATE TYPE "FamilyType" AS ENUM ('Joint', 'Nuclear', 'Extended');

-- CreateEnum
CREATE TYPE "FamilyClass" AS ENUM ('MiddleClass', 'UpperClass', 'LowerClass');

-- CreateEnum
CREATE TYPE "ResidentialStatus" AS ENUM ('NepaliCitizen', 'PRHolder', 'NRN');

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "residentialStatus" "ResidentialStatus" NOT NULL DEFAULT 'NepaliCitizen';

-- CreateTable
CREATE TABLE "FamilyDetails" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "familyType" "FamilyType" NOT NULL,
    "familyClass" "FamilyClass" NOT NULL,
    "religion" "Religion" NOT NULL,
    "gotra" TEXT NOT NULL,

    CONSTRAINT "FamilyDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reportContent" TEXT NOT NULL,
    "reportDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FamilyDetails_userId_key" ON "FamilyDetails"("userId");

-- AddForeignKey
ALTER TABLE "FamilyDetails" ADD CONSTRAINT "FamilyDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
