import { $Enums, Colaborador, Prisma } from "@prisma/client";
import { ColaboradorRepository } from "../interfaces/colaborador-repository";
import { prisma } from "@/lib/prisma";

export class PrismaColaboradorRepository implements ColaboradorRepository {
  async findMany() {
    const colaborador = await prisma.colaborador.findMany()
    return colaborador;
  }
  async findByEmail(email: string) {
    const user = await prisma.colaborador.findFirst({
      where: {
        email
      }
    })
    return user
  }
  async create(data: Prisma.ColaboradorCreateInput) {
    const colaborador = prisma.colaborador.create({
      data
    })
    return colaborador
  }

}