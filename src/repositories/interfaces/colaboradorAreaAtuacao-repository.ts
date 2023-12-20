import { AreaAtuacaoColaborador, Colaborador, Prisma } from "@prisma/client";

export interface ColaboradorAreaAtuacaoRepository {
    create(data: Prisma.AreaAtuacaoColaboradorCreateInput): Promise<AreaAtuacaoColaborador>
}