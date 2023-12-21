import { PrismaColaboradorRepository } from "@/repositories/prisma/prisma-colaborador-repository";
import { AutenticacaoUseCase } from "../autenticacaoUseCase";
import { PerfilUseCase } from "../perfilGetUseCase";

export function MakePerfil(){
    const useRepositoryColaborador = new PrismaColaboradorRepository()
    const perfilUseCase = new PerfilUseCase(useRepositoryColaborador)
  
    return perfilUseCase
}