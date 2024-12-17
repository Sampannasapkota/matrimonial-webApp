-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'NonBinary');

-- CreateEnum
CREATE TYPE "Religion" AS ENUM ('hinduism', 'buddhism', 'islam', 'christianity', 'others');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('single', 'widowed', 'divorced');

-- CreateEnum
CREATE TYPE "ProvinceName" AS ENUM ('Bagmati', 'Gandaki', 'Koshi', 'Karnali', 'Lumbini', 'Madhesh', 'Sudurpaschim');

-- CreateEnum
CREATE TYPE "DietPreference" AS ENUM ('Veg', 'NonVeg', 'Eggiterian', 'Vegan', 'NoPreference');

-- CreateEnum
CREATE TYPE "EducationLevel" AS ENUM ('PrimaryLevel', 'SecondaryLevel', 'HigherSecondaryLevel', 'BachelorDegree', 'MasterDegree', 'PhD');

-- CreateEnum
CREATE TYPE "EmploymentStatus" AS ENUM ('Employed', 'SelfEmployed', 'Student', 'Unemployed', 'Retired');

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "socialSignIn" BOOLEAN NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "id" SERIAL NOT NULL,
    "provinceName" "ProvinceName" NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "provinceId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "profilePic" TEXT,
    "dietPreference" "DietPreference" NOT NULL,
    "ageRange" INTEGER NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "religion" "Religion" NOT NULL,
    "districtId" INTEGER NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "maritalStatus" "MaritalStatus" NOT NULL,
    "educationStatus" "EducationLevel" NOT NULL,
    "employmentStatus" "EmploymentStatus" NOT NULL,
    "partnerPreference" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "messageContent" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL,
    "readAt" TIMESTAMP(3),

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "userOneId" INTEGER NOT NULL,
    "userTwoId" INTEGER NOT NULL,
    "matchDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Interest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterestUser" (
    "userId" INTEGER NOT NULL,
    "interestId" INTEGER NOT NULL,

    CONSTRAINT "InterestUser_pkey" PRIMARY KEY ("userId","interestId")
);

-- CreateTable
CREATE TABLE "_UserMatches" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Interest_name_key" ON "Interest"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_UserMatches_AB_unique" ON "_UserMatches"("A", "B");

-- CreateIndex
CREATE INDEX "_UserMatches_B_index" ON "_UserMatches"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_userOneId_fkey" FOREIGN KEY ("userOneId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_userTwoId_fkey" FOREIGN KEY ("userTwoId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterestUser" ADD CONSTRAINT "InterestUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterestUser" ADD CONSTRAINT "InterestUser_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "Interest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserMatches" ADD CONSTRAINT "_UserMatches_A_fkey" FOREIGN KEY ("A") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserMatches" ADD CONSTRAINT "_UserMatches_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
