import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { TecnologiaRepository } from "../interfaces/tecnologia-repository";

export class PrismaTecnologiaRepository implements TecnologiaRepository {
       async create(data: Prisma.TecnologiaCreateInput){
        const tecnologiaCreate = prisma.tecnologia.create({
            data
        })
        return tecnologiaCreate;
       }
}