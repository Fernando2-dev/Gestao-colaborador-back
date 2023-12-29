import { AreaAtuacaoColaborador } from "@prisma/client";

export interface IAtuacaoColaborador {
    colaborador_id: number;
    areaAtuacao_id: number;
}[]
export interface IAtuacaoColaboradorDelete {
    colaborador_id: number;
    areaAtuacao_id: number;
}[]

export interface ColaboradorAreaAtuacaoRepository {
    create(data: IAtuacaoColaborador): Promise<AreaAtuacaoColaborador[]>;
    deleteMany(data: IAtuacaoColaboradorDelete[]): Promise<void>;
}