import { PrismaProjetoColaboradorRepository } from "@/repositories/prisma/prisma-projeto-colaborador-repository";
import { ColaboradorProjetoDeleteUseCase } from "../ProjetoColaboradorUseCaseDelete";

export function MakeProjetoColaboradorDelete(){
    const projetoColaboradorRepository = new PrismaProjetoColaboradorRepository()
    const projetoColaborador = new ColaboradorProjetoDeleteUseCase(projetoColaboradorRepository)

    return projetoColaborador
}