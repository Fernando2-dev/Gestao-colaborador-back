import { MakeCreateColaboradorAreaAtuacao } from "@/useCase/fatories/make-create-colaboradorAreaAtuacao";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { Prisma } from "@prisma/client";

export async function createColaboradorAreaAtuacao(request: FastifyRequest, reply: FastifyReply) {
    const createSchemaData = z.object({
        areaAtuacao_id: z.number(),
        colaborador_id: z.number()
    });

    const { areaAtuacao_id, colaborador_id } = createSchemaData.parse(request.body);
    const useCaseColaboradorAreaAtuacao = MakeCreateColaboradorAreaAtuacao();

    try {
        const input: Prisma.AreaAtuacaoColaboradorCreateInput = {
            id_colaborador: {
                connect: {
                    id: colaborador_id,
                },
            },
            id_area_atuacao: {
                connect: {
                    id: areaAtuacao_id,
                },
            },
        };
        await useCaseColaboradorAreaAtuacao.execute(input);
    } catch (error) {
        throw new Error()
    }

    return reply.status(201).send();
}
