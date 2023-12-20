import { Prisma, Tecnologia } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { TecnologiaRepository } from "../interfaces/tecnologia-repository";

export class PrismaTecnologiaRepository implements TecnologiaRepository {
      async findMany(): Promise<Tecnologia[]> {
           const tecnologia = prisma.tecnologia.findMany()
           return tecnologia
       }
       async create(data: Prisma.TecnologiaCreateInput){
        const tecnologiaCreate = prisma.tecnologia.create({
            data
        })
        return tecnologiaCreate;
       }
}