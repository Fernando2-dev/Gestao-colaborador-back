import { prisma } from "@/lib/prisma";
import { IProjetoColaborador, ProjetoColaboradorRepository } from "../interfaces/projetoColaborador-repository";


export class PrismaProjetoColaboradorRepository implements ProjetoColaboradorRepository {
   async create(data: IProjetoColaborador) {
        const ColaboradorProjeto = await prisma.colaboradorProjeto.create({
            data
        })
        return [ColaboradorProjeto]
    }
    
}