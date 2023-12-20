import { Colaborador, Prisma } from "@prisma/client";

export interface ColaboradorRepository {
    create(data: Prisma.ColaboradorCreateInput): Promise<Colaborador>
    findByEmail(email: string): Promise<Colaborador | null>
    // findById(id: string): Promise<Colaborador | null>
}