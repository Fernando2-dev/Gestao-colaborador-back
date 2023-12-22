/*
  Warnings:

  - You are about to drop the column `projetoId` on the `colaborador` table. All the data in the column will be lost.
  - You are about to drop the `areaAtuacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `areaAtuacaoColaborador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projetoTecnologia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "areaAtuacaoColaborador" DROP CONSTRAINT "areaAtuacaoColaborador_areaAtuacao_id_fkey";

-- DropForeignKey
ALTER TABLE "areaAtuacaoColaborador" DROP CONSTRAINT "areaAtuacaoColaborador_colaborador_id_fkey";

-- DropForeignKey
ALTER TABLE "colaborador" DROP CONSTRAINT "colaborador_projetoId_fkey";

-- DropForeignKey
ALTER TABLE "projetoTecnologia" DROP CONSTRAINT "projetoTecnologia_projeto_id_fkey";

-- DropForeignKey
ALTER TABLE "projetoTecnologia" DROP CONSTRAINT "projetoTecnologia_tecnologia_id_fkey";

-- AlterTable
ALTER TABLE "colaborador" DROP COLUMN "projetoId";

-- DropTable
DROP TABLE "areaAtuacao";

-- DropTable
DROP TABLE "areaAtuacaoColaborador";

-- DropTable
DROP TABLE "projetoTecnologia";

-- CreateTable
CREATE TABLE "area_atuacao_colaborador" (
    "colaborador_id" INTEGER NOT NULL,
    "areaAtuacao_id" INTEGER NOT NULL,

    CONSTRAINT "area_atuacao_colaborador_pkey" PRIMARY KEY ("colaborador_id","areaAtuacao_id")
);

-- CreateTable
CREATE TABLE "area_atuacao" (
    "id" SERIAL NOT NULL,
    "area_atuacao" TEXT NOT NULL,

    CONSTRAINT "area_atuacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaborador_projeto" (
    "colaborador_id" INTEGER NOT NULL,
    "projeto_id" INTEGER NOT NULL,

    CONSTRAINT "colaborador_projeto_pkey" PRIMARY KEY ("colaborador_id","projeto_id")
);

-- CreateTable
CREATE TABLE "projeto_tecnologia" (
    "tecnologia_id" INTEGER NOT NULL,
    "projeto_id" INTEGER NOT NULL,

    CONSTRAINT "projeto_tecnologia_pkey" PRIMARY KEY ("tecnologia_id","projeto_id")
);

-- AddForeignKey
ALTER TABLE "area_atuacao_colaborador" ADD CONSTRAINT "area_atuacao_colaborador_colaborador_id_fkey" FOREIGN KEY ("colaborador_id") REFERENCES "colaborador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "area_atuacao_colaborador" ADD CONSTRAINT "area_atuacao_colaborador_areaAtuacao_id_fkey" FOREIGN KEY ("areaAtuacao_id") REFERENCES "area_atuacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborador_projeto" ADD CONSTRAINT "colaborador_projeto_colaborador_id_fkey" FOREIGN KEY ("colaborador_id") REFERENCES "colaborador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborador_projeto" ADD CONSTRAINT "colaborador_projeto_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projeto_tecnologia" ADD CONSTRAINT "projeto_tecnologia_tecnologia_id_fkey" FOREIGN KEY ("tecnologia_id") REFERENCES "tecnologia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projeto_tecnologia" ADD CONSTRAINT "projeto_tecnologia_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
