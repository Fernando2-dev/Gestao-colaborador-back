import { MakeDeleteAreaAtuacao } from "@/useCase/fatories/make-areaAtuacao-delete";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteAreaAtuacao(request: FastifyRequest, reply: FastifyReply) {
    const schemaAreaAtuacao = z.object({
        id: z.string().refine((value) => !isNaN(Number(value))),
    })

    const { id } = schemaAreaAtuacao.parse(request.params)
    const useCaseAreaAtuacao = MakeDeleteAreaAtuacao()

    try {
        const numericId = Number(id);
        await useCaseAreaAtuacao.execute(numericId)
        return reply.status(204).send()
    } catch (err) {
        throw new Error()
    }

}