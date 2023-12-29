import { prisma } from "@/lib/prisma";
import { IProjetoColaborador, IProjetoColaboradorDelete, ProjetoColaboradorRepository } from "../interfaces/projetoColaborador-repository";


export class PrismaProjetoColaboradorRepository implements ProjetoColaboradorRepository {
   
    async deleteMany(data: IProjetoColaboradorDelete[]): Promise<void> {
        const condicoes = data.map(({ colaborador_id, projeto_id }) => ({
            colaborador_id,
            projeto_id,
        }));

        await prisma.colaboradorProjeto.deleteMany({
            where: {
                OR: condicoes,
            },
        });
    }
    async create(data: IProjetoColaborador) {
        const ColaboradorProjeto = await prisma.colaboradorProjeto.create({
            data
        })
        return [ColaboradorProjeto]
    }

}