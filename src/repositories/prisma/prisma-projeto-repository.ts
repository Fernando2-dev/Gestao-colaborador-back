import { Prisma, Projeto } from "@prisma/client";
import { ProjetoRepository } from "../interfaces/projeto-repository";
import { prisma } from "@/lib/prisma";

export class PrismaProjetoRepository implements ProjetoRepository {
    async findMany(): Promise<Projeto[]> {
        const projeto = await prisma.projeto.findMany()
        return projeto
    }
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