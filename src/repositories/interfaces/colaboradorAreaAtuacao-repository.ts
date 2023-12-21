import { AreaAtuacaoColaborador, Colaborador, Prisma } from "@prisma/client";

export interface IAtuacaoColaborador {
    colaborador_id: number;
    areaAtuacao_id: number;
}
export interface ColaboradorAreaAtuacaoRepository {
    create(data: IAtuacaoColaborador): Promise<AreaAtuacaoColaborador>
}