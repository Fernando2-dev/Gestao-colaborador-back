import { Prisma, Tecnologia } from "@prisma/client";

export interface TecnologiaRepository {
    create(nome_tecnologia: Prisma.TecnologiaCreateInput): Promise<Tecnologia>
    findMany(): Promise<Tecnologia[]>
}