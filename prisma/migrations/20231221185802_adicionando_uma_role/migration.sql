-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('GESTOR', 'MEMBRO');

-- AlterTable
ALTER TABLE "colaborador" ADD COLUMN     "role" "ROLE" NOT NULL DEFAULT 'MEMBRO';
