import { prisma } from "@/lib/prisma";
import { ITecnologiaProjeto, ProjetoTecnologiaRepository } from "../interfaces/projetoTecnologia-repository";


export class PrismaProjetoTecnologiaRepository implements ProjetoTecnologiaRepository {
   async create(data: ITecnologiaProjeto) {
        const projetoTecnologia = prisma.projetoTecnologia.create({
            data
        })
        return projetoTecnologia
    }
    
}