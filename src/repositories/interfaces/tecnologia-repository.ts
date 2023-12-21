import { Prisma, Tecnologia } from "@prisma/client";

export interface TecnologiaRepository {
    update(data: Tecnologia): Promise<Tecnologia>
    delete(id: number): Promise<void>
    create(nome_tecnologia: Prisma.TecnologiaCreateInput): Promise<Tecnologia>
    findMany(): Promise<Tecnologia[]>
}