import { MakeDeleteProjeto } from "@/useCase/fatories/make-delete-projeto";
import { MakeDeleteTecnologia } from "@/useCase/fatories/make-delete-tecnologia";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteTecnologia(request: FastifyRequest, reply: FastifyReply) {
    const schemaColaborador = z.object({
        id: z.string().refine((value) => !isNaN(Number(value))),
    })

    const { id } = schemaColaborador.parse(request.params)
    const useCaseTecnologia = MakeDeleteTecnologia()
    
    try {
        const numericId = Number(id);
        await useCaseTecnologia.execute(numericId)
        return reply.status(204).send()
    } catch (err) {
        throw new Error()
    }

}