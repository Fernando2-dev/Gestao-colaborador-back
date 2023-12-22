import { PrismaProjetoColaboradorRepository } from "@/repositories/prisma/prisma-projeto-colaborador-repository";
import { ProjetoColaboradorUseCase } from "../projetoColaboradorCreatedUseCase";

export function MakeProjetoColaborador(){
    const projetoColaboradorRepository = new PrismaProjetoColaboradorRepository()
    const projetoColaborador = new ProjetoColaboradorUseCase(projetoColaboradorRepository)

    return projetoColaborador
}