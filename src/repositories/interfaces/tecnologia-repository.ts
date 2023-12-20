import { Prisma, Tecnologia } from "@prisma/client";

export interface TecnologiaRepository {
    update(data: Tecnologia): Promise<Tecnologia>
    create(nome_tecnologia: Prisma.TecnologiaCreateInput): Promise<Tecnologia>
    findMany(): Promise<Tecnologia[]>
}