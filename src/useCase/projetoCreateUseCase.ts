import { ProjetoRepository } from "@/repositories/interfaces/projeto-repository";
import {  Projeto } from "@prisma/client";


interface ProjetoUseCaseRequest {
    nome: string
    prazo: string
    descricao: string
}

interface projetoUseCaseResponse {
    projeto: Projeto
  }

export class ProjetoCreatedUseCase {

    constructor(private projetoRepository: ProjetoRepository) { }

    async execute({ nome, descricao, prazo}: ProjetoUseCaseRequest): Promise<projetoUseCaseResponse> {
        const projeto = await this.projetoRepository.create({
            nome,
            descricao,
            prazo
        })
        return {
            projeto
        }
    }
}