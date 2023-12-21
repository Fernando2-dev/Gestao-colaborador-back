import { Prisma, Projeto } from "@prisma/client";
import { ProjetoRepository } from "../interfaces/projeto-repository";
import { prisma } from "@/lib/prisma";

export class PrismaProjetoRepository implements ProjetoRepository {
    async delete(id: number): Promise<void> {
        await prisma.projeto.delete({
            where: {
                id
            }
        })
    }
    async update(data: Projeto) {
        const projeto = await prisma.projeto.update({
            where: {
                id: data.id
            },
            data
        })
        return projeto
    }

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