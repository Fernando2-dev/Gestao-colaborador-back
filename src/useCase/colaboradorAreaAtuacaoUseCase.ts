import { ColaboradorAreaAtuacaoRepository } from "@/repositories/interfaces/colaboradorAreaAtuacao-repository";
import { AreaAtuacaoColaborador, Prisma } from "@prisma/client";

interface ColaboradorAreaAtuacaoResponse {
    colaboradorAreaAtuacao: AreaAtuacaoColaborador;
}

export class ColaboradorAreaAtuacaoUseCase {
    constructor(private colaboradorAreaAtuacao: ColaboradorAreaAtuacaoRepository) { }

    async execute({ id_area_atuacao, id_colaborador, }: Prisma.AreaAtuacaoColaboradorCreateInput): Promise<ColaboradorAreaAtuacaoResponse> {
        const colaboradorAreaAtuacao = await this.colaboradorAreaAtuacao.create({
            id_area_atuacao,
            id_colaborador,
        });
        return {
            colaboradorAreaAtuacao,
        };
    }
}
