import { AreaAtuacaoColaborador, Colaborador, ColaboradorProjeto, Prisma } from "@prisma/client";

export interface IProjetoColaborador {
    colaborador_id: number;
    projeto_id: number;
}
export interface ProjetoColaboradorRepository {
    create(data: IProjetoColaborador): Promise<ColaboradorProjeto>
}