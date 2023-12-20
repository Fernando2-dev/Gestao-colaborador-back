-- CreateEnum
CREATE TYPE "RegimeContratacao" AS ENUM ('CLT', 'PJ');

-- CreateEnum
CREATE TYPE "AreaAtuacao" AS ENUM ('FRONTEND', 'BACKEND', 'INFRAESTRUTURA', 'DESIGN', 'REQUISITOS', 'GESTAO');

-- CreateTable
CREATE TABLE "colaborador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "regimeContratacao" "RegimeContratacao" NOT NULL,
    "areaAtuacao" "AreaAtuacao"[],

    CONSTRAINT "colaborador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projeto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "prazo" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "projeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnologia" (
    "projetoId" INTEGER NOT NULL,
    "tecnologia" TEXT NOT NULL,

    CONSTRAINT "tecnologia_pkey" PRIMARY KEY ("projetoId","tecnologia")
);

-- CreateTable
CREATE TABLE "_ColaboradorToProjeto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ColaboradorToProjeto_AB_unique" ON "_ColaboradorToProjeto"("A", "B");

-- CreateIndex
CREATE INDEX "_ColaboradorToProjeto_B_index" ON "_ColaboradorToProjeto"("B");

-- AddForeignKey
ALTER TABLE "tecnologia" ADD CONSTRAINT "tecnologia_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ColaboradorToProjeto" ADD CONSTRAINT "_ColaboradorToProjeto_A_fkey" FOREIGN KEY ("A") REFERENCES "colaborador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ColaboradorToProjeto" ADD CONSTRAINT "_ColaboradorToProjeto_B_fkey" FOREIGN KEY ("B") REFERENCES "projeto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
