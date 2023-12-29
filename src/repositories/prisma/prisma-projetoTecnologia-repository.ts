import { prisma } from "@/lib/prisma";
import { ITecnologiaProjeto, ITecnologiaProjetoDelete, ProjetoTecnologiaRepository } from "../interfaces/projetoTecnologia-repository";


export class PrismaProjetoTecnologiaRepository implements ProjetoTecnologiaRepository {
    async deleteMany(data: ITecnologiaProjetoDelete[]): Promise<void> {
        const condicoes = data.map(({ tecnologia_id, projeto_id }) => ({
            tecnologia_id,
            projeto_id,
        }));

        await prisma.projetoTecnologia.deleteMany({
            where: {
                OR: condicoes,
            },
        });
    }
   async create(data: ITecnologiaProjeto) {
    const ColaboradorProjeto = await prisma.projetoTecnologia.create({
        data
    })
    return [ColaboradorProjeto]
    }
    
}