import { MakeCreateColaboradorAreaAtuacao } from "@/useCase/fatories/make-create-colaboradorAreaAtuacao";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createColaboradorAreaAtuacao(request: FastifyRequest, reply: FastifyReply) {
    const createSchemaData = z.object({
        areaAtuacao_id: z.number(),
        colaborador_id: z.number()
    });

    const { areaAtuacao_id, colaborador_id } = createSchemaData.parse(request.body);
    const useCaseColaboradorAreaAtuacao = MakeCreateColaboradorAreaAtuacao();

    try {
        
        await useCaseColaboradorAreaAtuacao.execute({
            areaAtuacao_id,
            colaborador_id
        });
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ message: error.message })
        }
    }

    return reply.status(201).send();
}
