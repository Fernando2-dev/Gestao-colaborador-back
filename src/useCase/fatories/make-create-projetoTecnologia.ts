import { PrismaProjetoColaboradorRepository } from "@/repositories/prisma/prisma-projeto-colaborador-repository";
import { ProjetoColaboradorUseCase } from "../projetoColaboradorCreatedUseCase";
import { ProjetoTecnologiaUseCase } from "../projetoTecnologiaCreateUseCase";
import { PrismaProjetoTecnologiaRepository } from "@/repositories/prisma/prisma-projetoTecnologia-repository";

export function MakeProjetoTecnologia(){
    const projetoTecnologiaRepository = new PrismaProjetoTecnologiaRepository()
    const projetoTecnologia = new ProjetoTecnologiaUseCase(projetoTecnologiaRepository)

    return projetoTecnologia
}