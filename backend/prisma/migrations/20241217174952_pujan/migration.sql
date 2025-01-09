-- AlterTable
ALTER TABLE "_UserMatches" ADD CONSTRAINT "_UserMatches_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_UserMatches_AB_unique";
