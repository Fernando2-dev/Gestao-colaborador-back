import { Prisma } from "@prisma/client";
import { ColaboradorAreaAtuacaoRepository, IAtuacaoColaborador } from "../interfaces/colaboradorAreaAtuacao-repository";
import { prisma } from "@/lib/prisma";


export class PrismaColaboradorAreaAtuacaoRepository implements ColaboradorAreaAtuacaoRepository {
   async create(data: IAtuacaoColaborador) {
        const areaAtuacaoColaborador = prisma.areaAtuacaoColaborador.create({
            data
        })
        return areaAtuacaoColaborador
    }
    
}