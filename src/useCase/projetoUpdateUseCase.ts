import { ProjetoRepository } from "@/repositories/interfaces/projeto-repository";
import {  Projeto } from "@prisma/client";



interface ProjetoUpdateUseCaseResponse {
    projeto: Projeto
}

export class ProjetoUpdateUseCase {

    constructor(private projetoRepository: ProjetoRepository) { }

    async execute({ id, nome, descricao, prazo}: Projeto): Promise<ProjetoUpdateUseCaseResponse> {
        const projeto = await this.projetoRepository.update({
            id,
            nome,
            descricao,
            prazo
        })
        return {
            projeto
        }
    }
}