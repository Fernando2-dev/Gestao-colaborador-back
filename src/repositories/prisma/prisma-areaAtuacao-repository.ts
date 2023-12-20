import { AreaAtuacao, Prisma } from "@prisma/client";
import { AreaAtucaoRepository } from "../interfaces/areaAtucao-repository";
import { prisma } from "@/lib/prisma";

export class PrismaAreaAtucaoRepository implements AreaAtucaoRepository {
    async update(data: AreaAtuacao) {
        const areaAtuacao = prisma.areaAtuacao.update({
            where: {
                id: data.id
            },
            data
        })
        return areaAtuacao
    }
    findMany(): Promise<AreaAtuacao[]> {
        const areaAtuacao = prisma.areaAtuacao.findMany()
        return areaAtuacao
    }
    async create(data: Prisma.AreaAtuacaoCreateInput) {
        const area = await prisma.areaAtuacao.create({
            data
        })
        return area
    }

    async findByName(area_atuacao: string) {
        const nomeEncontrado = await prisma.areaAtuacao.findFirst({
            where: {
                area_atuacao
            }
        })
        return nomeEncontrado
    }

}