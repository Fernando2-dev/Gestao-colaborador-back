import { AreaAtucaoRepository } from "@/repositories/interfaces/areaAtucao-repository";
import { AreaAtuacao,  } from "@prisma/client";

export class AreaAtuacaoGetdUseCase {
    constructor(private areaAtuacaoRepository: AreaAtucaoRepository) { }

    async execute(): Promise<AreaAtuacao[]> {
        const areaAtuacao = await this.areaAtuacaoRepository.findMany()
        return areaAtuacao
    }
}