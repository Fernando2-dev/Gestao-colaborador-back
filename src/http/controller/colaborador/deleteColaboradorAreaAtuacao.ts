import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeColaboradorAreaAtuacaoDelete } from "@/useCase/fatories/make-areaAtuacaoColaborador-delete";

export async function deleteColaboradorAreaAtuacao(request: FastifyRequest, reply: FastifyReply) {
    const deleteSchemaData = z.object({
        vinculos: z.array(
            z.object({
                colaborador_id: z.number(),
                areaAtuacao_id: z.number(),
            })
        ),
    });

    const { vinculos } = deleteSchemaData.parse(request.body);
    const useCaseColaboradorAreaAtuacao =  MakeColaboradorAreaAtuacaoDelete();

    try {
        await Promise.all(
            vinculos.map(async ({ colaborador_id, areaAtuacao_id }) => {
                await useCaseColaboradorAreaAtuacao.execute({ colaborador_id, areaAtuacao_id });
            })
        );
        return reply.status(204).send();
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(404).send({ message: error.message });
        }
    }

    return reply.status(201).send();
}