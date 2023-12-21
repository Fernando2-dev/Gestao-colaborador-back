import { TecnologiaRepository } from "@/repositories/interfaces/tecnologia-repository";

export class TecnologiaDeleteUseCase {

    constructor(private tecnologiaRepository: TecnologiaRepository) { }

    async execute(id: number): Promise<void> {
         await this.tecnologiaRepository.delete(id)
    }
}