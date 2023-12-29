import { PrismaColaboradorAreaAtuacaoRepository } from "@/repositories/prisma/prisma-colaboradorAreaAtuacao-repository";
import { ColaboradorAreaAtuacaoDeleteUseCase } from "../colaboradorAreaAtuacaoDeleteUseCase";

export function MakeColaboradorAreaAtuacaoDelete(){
    const useRepositoryColaboradorAreaAtuacao = new PrismaColaboradorAreaAtuacaoRepository()
    const colaboradorAreaAtuacaoUseCaseDelete = new ColaboradorAreaAtuacaoDeleteUseCase(useRepositoryColaboradorAreaAtuacao)
  
    return colaboradorAreaAtuacaoUseCaseDelete
}