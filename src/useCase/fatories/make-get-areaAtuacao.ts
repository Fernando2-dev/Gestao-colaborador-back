import { PrismaAreaAtucaoRepository } from "@/repositories/prisma/prisma-areaAtuacao-repository";
import { AreaAtuacaoGetdUseCase } from "../areaAtuacaoGetUseCase";

export function MakeGetAreaAtuacao(){
    const areaAtuacaoRepository = new PrismaAreaAtucaoRepository()
    const areaAtuacaoGetUseCase = new AreaAtuacaoGetdUseCase(areaAtuacaoRepository)

    return areaAtuacaoGetUseCase
}