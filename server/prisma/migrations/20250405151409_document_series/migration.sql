/*
  Warnings:

  - A unique constraint covering the columns `[code,typeDocId]` on the table `DocumentSerie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `typeDocId` to the `DocumentSerie` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `DocumentSerie_code_key` ON `DocumentSerie`;

-- AlterTable
ALTER TABLE `DocumentSerie` ADD COLUMN `typeDocId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `DocumentSerie_code_typeDocId_key` ON `DocumentSerie`(`code`, `typeDocId`);

-- AddForeignKey
ALTER TABLE `DocumentSerie` ADD CONSTRAINT `DocumentSerie_typeDocId_fkey` FOREIGN KEY (`typeDocId`) REFERENCES `DocumentType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
