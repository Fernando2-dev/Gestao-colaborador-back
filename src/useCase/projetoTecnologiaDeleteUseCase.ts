import { ITecnologiaProjetoDelete, ProjetoTecnologiaRepository } from "@/repositories/interfaces/projetoTecnologia-repository";

export class ProjetoTecnologiaDeleteUseCase {
    constructor(private tecnologiaProjetoDelete: ProjetoTecnologiaRepository) {}

    async execute({ tecnologia_id,  projeto_id}: ITecnologiaProjetoDelete) {
        const data: ITecnologiaProjetoDelete[] = [
            { tecnologia_id, projeto_id }
        ];
        await this.tecnologiaProjetoDelete.deleteMany(data);
    }
}