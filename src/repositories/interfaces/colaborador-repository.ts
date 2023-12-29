import { $Enums, Colaborador, Prisma, PrismaClient } from "@prisma/client";

export interface IColaborador {
    id: number;
    nome?: string;
    email?: string;
    idade?: string;
    role?: $Enums.ROLE;
    regime_contratacao?: $Enums.RegimeContratacao
}

export interface ColaboradorRepository {
    create(data: Prisma.ColaboradorCreateInput): Promise<Colaborador>
    update(data: IColaborador): Promise<IColaborador>
    delete(id: number): Promise<void>
    findByEmail(email: string): Promise<Colaborador | null>
    findById(id: number): Promise<IColaborador | null>
    findMany(): Promise<IColaborador[]>
}