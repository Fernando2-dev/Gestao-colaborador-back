import { ColaboradorGetdUseCase } from "../colaboradorGetUseCase";
import { PrismaProjetoRepository } from "@/repositories/prisma/prisma-projeto-repository";
import { ProjetoGetdUseCase } from "../projetoGetUseCase";
import { ProjetoDeleteUseCase } from "../projetoDeleteUseCase";

export function MakeDeleteProjeto(){
    const projetoRepository = new PrismaProjetoRepository()
    const projetoDeleteUseCase = new ProjetoDeleteUseCase(projetoRepository)

    return projetoDeleteUseCase
}