import { Prisma, Projeto } from "@prisma/client";

export interface ProjetoRepository {
    create(data: Prisma.ProjetoCreateInput): Promise<Projeto>
    findById(id: number): Promise<Projeto | null>
    findMany(): Promise<Projeto[]>
}