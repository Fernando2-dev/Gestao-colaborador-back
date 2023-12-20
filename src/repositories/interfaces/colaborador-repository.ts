import { Colaborador, Prisma, PrismaClient } from "@prisma/client";

export interface ColaboradorRepository {
    create(data: Prisma.ColaboradorCreateInput): Promise<Colaborador>
    findByEmail(email: string): Promise<Colaborador | null>
    findMany(): Promise<Colaborador[]>
}