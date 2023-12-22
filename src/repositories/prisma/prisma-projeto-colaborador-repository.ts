import { Prisma } from "@prisma/client";
import { ColaboradorAreaAtuacaoRepository, IAtuacaoColaborador } from "../interfaces/colaboradorAreaAtuacao-repository";
import { prisma } from "@/lib/prisma";
import { IProjetoColaborador, ProjetoColaboradorRepository } from "../interfaces/projetoColaborador-repository";


export class PrismaProjetoColaboradorRepository implements ProjetoColaboradorRepository {
   async create(data: IProjetoColaborador) {
        const colaboradorProjeto = prisma.colaboradorProjeto.create({
            data
        })
        return colaboradorProjeto
    }
    
}