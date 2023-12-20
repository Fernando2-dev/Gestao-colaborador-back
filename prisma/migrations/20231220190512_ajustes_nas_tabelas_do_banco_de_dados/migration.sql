/*
  Warnings:

  - You are about to drop the column `tenologia` on the `tecnologia` table. All the data in the column will be lost.
  - Added the required column `nome_tecnologia` to the `tecnologia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tecnologia" DROP COLUMN "tenologia",
ADD COLUMN     "nome_tecnologia" TEXT NOT NULL;
