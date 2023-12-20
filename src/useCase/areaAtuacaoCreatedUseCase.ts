import { AreaAtuacao, Prisma } from "@prisma/client";
import { AreaAtucaoRepository } from "@/repositories/interfaces/areaAtucao-repository";
import { AreaAtuacaoExistente } from "./error/areaAtuacaoExistente";



interface AreaAtuacaoCreatedUseCaseResponse {
    area: AreaAtuacao
}

export class AreaAtuacaoCreatedUseCase {

    constructor(private areaAtucaoRepository: AreaAtucaoRepository) { }

    async execute({ area_atuacao }: Prisma.AreaAtuacaoCreateInput): Promise<AreaAtuacaoCreatedUseCaseResponse> {  
        const areaExistente = await this.areaAtucaoRepository.findByName(area_atuacao)      

        if(areaExistente){
            throw new AreaAtuacaoExistente()
        }
        
        const area = await this.areaAtucaoRepository.create({
            area_atuacao
        })

        return {
            area
        }
    }
}