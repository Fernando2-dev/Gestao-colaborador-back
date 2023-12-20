import { Prisma, Projeto } from "@prisma/client";

export interface ProjetoRepository {
    update(data: Projeto): Promise<Projeto>
    create(data: Prisma.ProjetoCreateInput): Promise<Projeto>
    findById(id: number): Promise<Projeto | null>
    findMany(): Promise<Projeto[]>
}