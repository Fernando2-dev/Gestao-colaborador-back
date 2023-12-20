import { PrismaProjetoRepository } from "@/repositories/prisma/prisma-projeto-repository";
import { ProjetoUpdateUseCase } from "../projetoUpdateUseCase";

export function MakeUpdateProjeto(){
    const projetoRepository = new PrismaProjetoRepository()
    const projetoUpdateUseCase = new ProjetoUpdateUseCase(projetoRepository)

    return projetoUpdateUseCase
}