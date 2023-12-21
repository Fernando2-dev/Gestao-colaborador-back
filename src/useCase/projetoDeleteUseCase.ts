import { ProjetoRepository } from "@/repositories/interfaces/projeto-repository";

export class ProjetoDeleteUseCase {

    constructor(private projetoRepository: ProjetoRepository) { }

    async execute(id: number): Promise<void> {
         await this.projetoRepository.delete(id)
    }
}