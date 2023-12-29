import { PrismaProjetoColaboradorRepository } from "@/repositories/prisma/prisma-projeto-colaborador-repository";
import { ProjetoColaboradorUseCase } from "../projetoColaboradorCreatedUseCase";
import { PrismaProjetoTecnologiaRepository } from "@/repositories/prisma/prisma-projetoTecnologia-repository";
import { ProjetoTecnologiaUseCase } from "../projetoTecnologiaCreateUseCase";

export function MakeProjetoTecnologia(){
    const projetoTecnologiaRepository = new PrismaProjetoTecnologiaRepository()
    const projetoTecnologia = new ProjetoTecnologiaUseCase(projetoTecnologiaRepository)

    return projetoTecnologia
}