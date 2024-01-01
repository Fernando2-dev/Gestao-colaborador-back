import { MakeCreateTecnologia } from "@/useCase/fatories/make-create-tecnologia";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createTecnologia(request: FastifyRequest, reply: FastifyReply) {

    const createSchemaData = z.object({
        nome_tecnologia: z.string(),
    })

    const { nome_tecnologia } = createSchemaData.parse(request.body)
    const useCaseTecnologia = MakeCreateTecnologia()

    try {
       const tecnologia = await useCaseTecnologia.execute({
            nome_tecnologia,
        })
        return reply.status(201).send(tecnologia)
    } catch (err) {
        if (err instanceof Error) {
            return reply.status(409).send({ message: err.message })
        }

        throw err
    }
}