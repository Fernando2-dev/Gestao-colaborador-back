import { PrismaColaboradorAreaAtuacaoRepository } from "@/repositories/prisma/prisma-colaboradorAreaAtuacao-repository";
import { ColaboradorAreaAtuacaoUseCase } from "../colaboradorAreaAtuacaoUseCase";

export function MakeCreateColaboradorAreaAtuacao(){
    const prismaColaboradorAreaAtuacaoRepository = new PrismaColaboradorAreaAtuacaoRepository()
    const colaboradorAreaAtuacaoUseCase = new ColaboradorAreaAtuacaoUseCase(prismaColaboradorAreaAtuacaoRepository)

    return colaboradorAreaAtuacaoUseCase
}