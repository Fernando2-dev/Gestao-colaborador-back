import { Prisma } from "@prisma/client";
import { AreaAtucaoRepository } from "../interfaces/areaAtucao-repository";
import { prisma } from "@/lib/prisma";

export class PrismaAreaAtucaoRepository implements AreaAtucaoRepository {
    async create(data: Prisma.AreaAtuacaoCreateInput) {
        const area = await prisma.areaAtuacao.create({
            data
        })
        return area
    }

    async findByName(area_atuacao: string){
     const nomeEncontrado = await prisma.areaAtuacao.findFirst({
        where: {
            area_atuacao
        }
     })
     return nomeEncontrado
    }

}