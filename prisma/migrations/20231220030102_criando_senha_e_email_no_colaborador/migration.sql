/*
  Warnings:

  - Added the required column `email` to the `colaborador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `colaborador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "colaborador" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;
