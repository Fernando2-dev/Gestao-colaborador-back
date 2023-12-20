import { ColaboradorGetdUseCase } from "../colaboradorGetUseCase";
import { PrismaProjetoRepository } from "@/repositories/prisma/prisma-projeto-repository";
import { ProjetoGetdUseCase } from "../projetoGetUseCase";

export function MakeGetProjeto(){
    const projetoRepository = new PrismaProjetoRepository()
    const projetoGetUseCase = new ProjetoGetdUseCase(projetoRepository)

    return projetoGetUseCase
}