import { PrismaColaboradorRepository } from "@/repositories/prisma/prisma-colaborador-repository";
import { ColaboradorUpdateUseCase } from "../colaboradorUpdateUseCase";

export function MakeUpdateColaborador(){
    const colaboradorRepository = new PrismaColaboradorRepository()
    const colaboradorUpdateUseCase = new ColaboradorUpdateUseCase(colaboradorRepository)

    return colaboradorUpdateUseCase
}