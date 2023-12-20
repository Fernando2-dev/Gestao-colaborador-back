import { PrismaColaboradorRepository } from "@/repositories/prisma/prisma-colaborador-repository";
import { ColaboradorGetdUseCase } from "../colaboradorGetUseCase";

export function MakeGetColaborador(){
    const colaboradorRepository = new PrismaColaboradorRepository()
    const colaboradorGetUseCase = new ColaboradorGetdUseCase(colaboradorRepository)

    return colaboradorGetUseCase
}