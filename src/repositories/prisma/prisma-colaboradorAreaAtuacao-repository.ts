import { Prisma } from "@prisma/client";
import { ColaboradorAreaAtuacaoRepository } from "../interfaces/colaboradorAreaAtuacao-repository";
import { prisma } from "@/lib/prisma";

export class PrismaColaboradorAreaAtuacaoRepository implements ColaboradorAreaAtuacaoRepository {
   async create(data: Prisma.AreaAtuacaoColaboradorCreateInput) {
        const areaAtuacaoColaborador = prisma.areaAtuacaoColaborador.create({
            data
        })
        return areaAtuacaoColaborador
    }
    
}