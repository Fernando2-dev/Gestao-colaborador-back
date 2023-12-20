import { AreaAtucaoRepository } from "@/repositories/interfaces/areaAtucao-repository";
import { ColaboradorRepository } from "@/repositories/interfaces/colaborador-repository";
import { AreaAtuacao, Colaborador, Prisma } from "@prisma/client";



interface AreaAtuacaoUpdateUseCaseResponse {
    areaAtuacao: AreaAtuacao
}

export class AreaAtuacaoUpdateUseCase {

    constructor(private areaAtuacaoRepository: AreaAtucaoRepository) { }

    async execute({ id, area_atuacao}: AreaAtuacao): Promise<AreaAtuacaoUpdateUseCaseResponse> {
        const areaAtuacao = await this.areaAtuacaoRepository.update({
            id,
            area_atuacao
        })
        return {
            areaAtuacao
        }
    }
}