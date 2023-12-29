import { $Enums,  Prisma } from "@prisma/client";
import {  ColaboradorRepository, IColaborador } from "../interfaces/colaborador-repository";
import { prisma } from "@/lib/prisma";

export class PrismaColaboradorRepository implements ColaboradorRepository {
  async findById(id: number) {
    const colaborador = prisma.colaborador.findUnique({
      where: {
        id
      }
    })
    return colaborador;
  }
  async delete(id: number) {
    await prisma.colaborador.delete({
      where: {
        id
      }
    })
  }

  async update(data: IColaborador) {
    const colaborador = await prisma.colaborador.update({
      where: {
        id: data.id
      },
      data
    })
    return colaborador;
  }

  async findMany() {
    const colaboradores = await prisma.colaborador.findMany({
      include: {
        areasAtuacaoColaborador: {
          include: {
            id_area_atuacao: true,
          },
        },
         ColaboradorProjeto: {
          include: {
            id_projeto: true
          }
        }
      },
    });
  
    return colaboradores;
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