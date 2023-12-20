import { Prisma } from "@prisma/client";
import { ProjetoRepository } from "../interfaces/projeto-repository";
import { prisma } from "@/lib/prisma";

export class PrismaProjetoRepository implements ProjetoRepository {
    async create(data: Prisma.ProjetoCreateInput) {
        const projeto = prisma.projeto.create({
            data
        })
        return projeto;
    }

    async findById(id: number) {
        const idProjeto = prisma.projeto.findUnique({
            where: {
                id
            }
        });
        return idProjeto
    }
}