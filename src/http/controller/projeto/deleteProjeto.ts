import { MakeDeleteColaborador } from "@/useCase/fatories/make-colaborador-delete";
import { MakeDeleteProjeto } from "@/useCase/fatories/make-delete-projeto";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteProjeto(request: FastifyRequest, reply: FastifyReply) {
    const schemaColaborador = z.object({
        id: z.string().refine((value) => !isNaN(Number(value))),
    })

    const { id } = schemaColaborador.parse(request.params)
    const useCaseProjeto = MakeDeleteProjeto()
    
    try {
        const numericId = Number(id);
        await useCaseProjeto.execute(numericId)
        return reply.status(204).send()
    } catch (err) {
        throw new Error()
    }

}