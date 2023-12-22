import { $Enums, Colaborador, Prisma, PrismaClient } from "@prisma/client";

export interface Colaboradores {
    id: number;
    nome: string;
    email: string;
    senha?: string;
    idade: string;
    role: $Enums.ROLE;
    regime_contratacao: $Enums.RegimeContratacao
}

export interface ColaboradorRepository {
    create(data: Prisma.ColaboradorCreateInput): Promise<Colaborador>
    update(data: Colaborador): Promise<Colaborador>
    delete(id: number): Promise<void>
    findByEmail(email: string): Promise<Colaborador | null>
    findById(id: number): Promise<Colaborador | null>
    findMany(): Promise<Colaboradores[]>
}