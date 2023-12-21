import { ColaboradorRepository } from "@/repositories/interfaces/colaborador-repository";

export class ColaboradorDeleteUseCase {

    constructor(private colaboradorRepository: ColaboradorRepository) { }

    async execute(id: number): Promise<void> {
         await this.colaboradorRepository.delete(id)
    }
}