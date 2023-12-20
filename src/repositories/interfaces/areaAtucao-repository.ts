import { AreaAtuacao, Prisma } from "@prisma/client";

export interface AreaAtucaoRepository {
    create(data: Prisma.AreaAtuacaoCreateInput): Promise<AreaAtuacao>
    update(data: AreaAtuacao): Promise<AreaAtuacao>
    findByName(nome: string): Promise<AreaAtuacao | null>
    findMany(): Promise<AreaAtuacao[]>
}