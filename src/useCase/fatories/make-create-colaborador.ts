import { PrismaColaboradorRepository } from "@/repositories/prisma/prisma-colaborador-repository";
import { ColaboradorCreatedUseCase } from "../colaboradorCreatedUseCase";

export function MakeCreateColaborador(){
    const colaboradorRepository = new PrismaColaboradorRepository()
    const colaboradorCreateUseCase = new ColaboradorCreatedUseCase(colaboradorRepository)

    return colaboradorCreateUseCase
}