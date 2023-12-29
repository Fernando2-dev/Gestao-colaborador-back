import { PrismaProjetoTecnologiaRepository } from "@/repositories/prisma/prisma-projetoTecnologia-repository"
import { ProjetoTecnologiaDeleteUseCase } from "../projetoTecnologiaDeleteUseCase"

export function MakeProjetoTecnologiaDelete(){
    const projetoTecnologiaRepository = new PrismaProjetoTecnologiaRepository()
    const projetoTecnologia = new ProjetoTecnologiaDeleteUseCase(projetoTecnologiaRepository)

    return projetoTecnologia
}