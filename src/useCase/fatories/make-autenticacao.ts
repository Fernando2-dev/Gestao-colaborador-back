import { PrismaColaboradorRepository } from "@/repositories/prisma/prisma-colaborador-repository";
import { AutenticacaoUseCase } from "../autenticacaoUseCase";

export function MakeAutenticao(){
    const useRepositoryColaborador = new PrismaColaboradorRepository()
    const autenticacaoUseCase = new AutenticacaoUseCase(useRepositoryColaborador)
  
    return autenticacaoUseCase
}