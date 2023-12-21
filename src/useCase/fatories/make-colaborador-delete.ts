import { PrismaColaboradorRepository } from "@/repositories/prisma/prisma-colaborador-repository";
import { ColaboradorDeleteUseCase } from "../colaboradorDeleteUseCase";

export function MakeDeleteColaborador(){
    const colaboradorRepository = new PrismaColaboradorRepository()
    const colaboradorDeleteUseCase = new ColaboradorDeleteUseCase(colaboradorRepository)

    return colaboradorDeleteUseCase
}