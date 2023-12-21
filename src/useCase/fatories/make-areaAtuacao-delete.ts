import { PrismaColaboradorRepository } from "@/repositories/prisma/prisma-colaborador-repository";
import { ColaboradorDeleteUseCase } from "../colaboradorDeleteUseCase";
import { PrismaAreaAtucaoRepository } from "@/repositories/prisma/prisma-areaAtuacao-repository";
import { AreaAtuacaoDeleteUseCase } from "../areaAtuacaoDeleteUseCase";

export function MakeDeleteAreaAtuacao(){
    const areaAtuacaoRepository = new PrismaAreaAtucaoRepository()
    const areaAtuacaoDeleteUseCase = new AreaAtuacaoDeleteUseCase(areaAtuacaoRepository)

    return areaAtuacaoDeleteUseCase
}