import { ProjetoRepository } from "@/repositories/interfaces/projeto-repository";
import { TecnologiaRepository } from "@/repositories/interfaces/tecnologia-repository";
import {  Projeto, Tecnologia } from "@prisma/client";



interface TecnologiaUpdateUseCaseResponse {
    tecnologia: Tecnologia
}

export class TecnologiaUpdateUseCase {

    constructor(private tecnologiaRepository: TecnologiaRepository) { }

    async execute({ id, nome_tecnologia}: Tecnologia): Promise<TecnologiaUpdateUseCaseResponse> {
        const tecnologia = await this.tecnologiaRepository.update({
            id,
            nome_tecnologia
        })
        return {
            tecnologia
        }
    }
}