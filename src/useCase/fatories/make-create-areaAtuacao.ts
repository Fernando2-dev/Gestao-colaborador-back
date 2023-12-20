import { PrismaAreaAtucaoRepository } from "@/repositories/prisma/prisma-areaAtuacao-repository"
import { AreaAtuacaoCreatedUseCase } from "../areaAtuacaoCreatedUseCase"

export function MakeCreateAreaAtuacao() {
    const prismaAreaAtuacao = new PrismaAreaAtucaoRepository()
    const areaAtuacaorepository = new AreaAtuacaoCreatedUseCase(prismaAreaAtuacao)
        
    return areaAtuacaorepository
}