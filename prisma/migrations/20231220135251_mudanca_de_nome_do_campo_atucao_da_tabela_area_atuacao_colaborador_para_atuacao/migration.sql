/*
  Warnings:

  - The primary key for the `areaAtuacaoColaborador` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `areaAtucao_id` on the `areaAtuacaoColaborador` table. All the data in the column will be lost.
  - Added the required column `areaAtuacao_id` to the `areaAtuacaoColaborador` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "areaAtuacaoColaborador" DROP CONSTRAINT "areaAtuacaoColaborador_areaAtucao_id_fkey";

-- AlterTable
ALTER TABLE "areaAtuacaoColaborador" DROP CONSTRAINT "areaAtuacaoColaborador_pkey",
DROP COLUMN "areaAtucao_id",
ADD COLUMN     "areaAtuacao_id" INTEGER NOT NULL,
ADD CONSTRAINT "areaAtuacaoColaborador_pkey" PRIMARY KEY ("colaborador_id", "areaAtuacao_id");

-- AddForeignKey
ALTER TABLE "areaAtuacaoColaborador" ADD CONSTRAINT "areaAtuacaoColaborador_areaAtuacao_id_fkey" FOREIGN KEY ("areaAtuacao_id") REFERENCES "areaAtuacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
