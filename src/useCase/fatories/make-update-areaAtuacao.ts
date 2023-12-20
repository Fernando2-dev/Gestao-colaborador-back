import { PrismaColaboradorRepository } from "@/repositories/prisma/prisma-colaborador-repository";
import { ColaboradorUpdateUseCase } from "../colaboradorUpdateUseCase";
import { PrismaAreaAtucaoRepository } from "@/repositories/prisma/prisma-areaAtuacao-repository";
import { AreaAtuacaoUpdateUseCase } from "../areaAtuacaoUpdateUseCase";

export function MakeUpdateAreaAtuacao(){
    const areaAtuacaoRepository = new PrismaAreaAtucaoRepository()
    const areaAtuacaoUpdateUseCase = new AreaAtuacaoUpdateUseCase(areaAtuacaoRepository)

    return areaAtuacaoUpdateUseCase
}