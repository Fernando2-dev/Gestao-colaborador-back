import { ColaboradorAreaAtuacaoRepository, IAtuacaoColaborador } from "@/repositories/interfaces/colaboradorAreaAtuacao-repository";
import { AreaAtuacaoColaborador, Prisma } from "@prisma/client";

interface ColaboradorAreaAtuacaoResponse {
    areasAtuacaoColaborador: AreaAtuacaoColaborador[];
}

export class ColaboradorAreaAtuacaoUseCase {
    constructor(private colaboradorAreaAtuacao: ColaboradorAreaAtuacaoRepository) { }

    async execute({ areaAtuacao_id, colaborador_id }: IAtuacaoColaborador): Promise<ColaboradorAreaAtuacaoResponse> {
        const areasAtuacaoColaborador = await this.colaboradorAreaAtuacao.create({
            areaAtuacao_id,
            colaborador_id,
        });
        return {
            areasAtuacaoColaborador,
        };
    }
}
