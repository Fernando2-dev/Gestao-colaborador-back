import { PrismaProjetoRepository } from "@/repositories/prisma/prisma-projeto-repository";
import { ProjetoCreatedUseCase } from "../projetoCreateUseCase";

export function MakeCreateProjeto(){
    const prismaProjetoRepository = new PrismaProjetoRepository()
    const ProjetoUseCase = new ProjetoCreatedUseCase(prismaProjetoRepository)

    return ProjetoUseCase
}