import { AreaAtucaoRepository } from "@/repositories/interfaces/areaAtucao-repository";

export class AreaAtuacaoDeleteUseCase {

    constructor(private areaAtuacaoRepository: AreaAtucaoRepository) { }

    async execute(id: number): Promise<void> {
         await this.areaAtuacaoRepository.delete(id)
    }
}