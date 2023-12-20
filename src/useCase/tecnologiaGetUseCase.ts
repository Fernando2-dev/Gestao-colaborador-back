import { TecnologiaRepository } from "@/repositories/interfaces/tecnologia-repository";
import {  Tecnologia } from "@prisma/client";

export class TecnologiaGetdUseCase {
    constructor(private tecnologiaRepository: TecnologiaRepository) {}

    async execute(): Promise<Tecnologia[]> {
        const tecnologia = await this.tecnologiaRepository.findMany()
        return tecnologia;
    }
}