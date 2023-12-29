import {  IProjetoColaboradorDelete, ProjetoColaboradorRepository } from "@/repositories/interfaces/projetoColaborador-repository";

export class ColaboradorProjetoDeleteUseCase {
    constructor(private colaboradorProjetoDelete: ProjetoColaboradorRepository) {}

    async execute({ colaborador_id,  projeto_id}: IProjetoColaboradorDelete) {
        const data: IProjetoColaboradorDelete[] = [
            { colaborador_id, projeto_id }
        ];
        await this.colaboradorProjetoDelete.deleteMany(data);
    }
}
