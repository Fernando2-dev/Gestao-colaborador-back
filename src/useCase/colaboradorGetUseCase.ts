import { ColaboradorRepository } from "@/repositories/interfaces/colaborador-repository";
import { Colaborador, Prisma } from "@prisma/client";

export class ColaboradorGetdUseCase {
    constructor(private colaboradorRepository: ColaboradorRepository) { }

    async execute(): Promise<Colaborador[]> {
        const colaborador = await this.colaboradorRepository.findMany()
        return colaborador
    }
}