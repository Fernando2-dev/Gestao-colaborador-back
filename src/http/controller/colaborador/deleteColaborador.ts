import { MakeDeleteColaborador } from "@/useCase/fatories/make-colaborador-delete";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteColaborador(request: FastifyRequest, reply: FastifyReply) {
    const schemaColaborador = z.object({
        id: z.string().refine((value) => !isNaN(Number(value))),
    })

    const { id } = schemaColaborador.parse(request.params)
    const useCaseColaborador = MakeDeleteColaborador()
    
    try {
        const numericId = Number(id);
        await useCaseColaborador.execute(numericId)
        return reply.status(204).send()
    } catch (err) {
        throw new Error()
    }

}