import { PrismaTecnologiaRepository } from "@/repositories/prisma/prisma-tecnologia-repository";
import {  Tecnologia } from "@prisma/client";


interface TecnologiaUseCaseRequest {
    nome_tecnologia: string
}

interface TecnologiaUseCaseResponse {
    tecnologia: Tecnologia
  }

export class TecnologiaCreatedUseCase {

    constructor(private TecnologiaRepository: PrismaTecnologiaRepository) { }

    async execute({ nome_tecnologia}: TecnologiaUseCaseRequest): Promise<TecnologiaUseCaseResponse> {
        const tecnologia = await this.TecnologiaRepository.create({
            nome_tecnologia
        })
        return {
            tecnologia
        }
    }
}