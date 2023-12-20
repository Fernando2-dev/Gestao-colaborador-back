import { ProjetoRepository } from "@/repositories/interfaces/projeto-repository";
import { Colaborador, Prisma, Projeto } from "@prisma/client";

export class ProjetoGetdUseCase {
    constructor(private projetoRepository: ProjetoRepository) {}

    async execute(): Promise<Projeto[]> {
        const colaborador = await this.projetoRepository.findMany()
        return colaborador
    }
}