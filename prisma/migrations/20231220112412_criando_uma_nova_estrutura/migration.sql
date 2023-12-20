-- CreateEnum
CREATE TYPE "RegimeContratacao" AS ENUM ('CLT', 'PJ');

-- CreateTable
CREATE TABLE "colaborador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "regime_contratacao" "RegimeContratacao" NOT NULL,
    "projetoId" INTEGER,

    CONSTRAINT "colaborador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "areaAtuacaoColaborador" (
    "colaborador_id" INTEGER NOT NULL,
    "areaAtucao_id" INTEGER NOT NULL,

    CONSTRAINT "areaAtuacaoColaborador_pkey" PRIMARY KEY ("colaborador_id","areaAtucao_id")
);

-- CreateTable
CREATE TABLE "areaAtuacao" (
    "id" SERIAL NOT NULL,
    "area_atuacao" TEXT NOT NULL,

    CONSTRAINT "areaAtuacao_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "projetoTecnologia" (
    "tecnologia_id" INTEGER NOT NULL,
    "projeto_id" INTEGER NOT NULL,

    CONSTRAINT "projetoTecnologia_pkey" PRIMARY KEY ("tecnologia_id","projeto_id")
);

-- CreateTable
CREATE TABLE "tecnologia" (
    "id" SERIAL NOT NULL,
    "tenologia" TEXT NOT NULL,

    CONSTRAINT "tecnologia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "colaborador_email_key" ON "colaborador"("email");

-- AddForeignKey
ALTER TABLE "colaborador" ADD CONSTRAINT "colaborador_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "projeto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "areaAtuacaoColaborador" ADD CONSTRAINT "areaAtuacaoColaborador_colaborador_id_fkey" FOREIGN KEY ("colaborador_id") REFERENCES "colaborador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "areaAtuacaoColaborador" ADD CONSTRAINT "areaAtuacaoColaborador_areaAtucao_id_fkey" FOREIGN KEY ("areaAtucao_id") REFERENCES "areaAtuacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projetoTecnologia" ADD CONSTRAINT "projetoTecnologia_tecnologia_id_fkey" FOREIGN KEY ("tecnologia_id") REFERENCES "tecnologia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projetoTecnologia" ADD CONSTRAINT "projetoTecnologia_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
