import { ColaboradorAreaAtuacaoRepository, IAtuacaoColaboradorDelete } from "@/repositories/interfaces/colaboradorAreaAtuacao-repository";

export class ColaboradorAreaAtuacaoDeleteUseCase {
    constructor(private colaboradorAreaAtuacaoDelete: ColaboradorAreaAtuacaoRepository) {}

    async execute({ colaborador_id, areaAtuacao_id }: IAtuacaoColaboradorDelete) {
        const data: IAtuacaoColaboradorDelete[] = [
            { colaborador_id, areaAtuacao_id }
        ];
        await this.colaboradorAreaAtuacaoDelete.deleteMany(data);
    }
}