import { EmailExistente } from "@/useCase/error/emailExistente";
import { MakeCreateProjeto } from "@/useCase/fatories/make-create-projeto";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createProjeto(request: FastifyRequest, reply: FastifyReply) {

    const createSchemaData = z.object({
        nome: z.string(),
        prazo: z.string(),
        descricao: z.string()
    })

    const { nome, descricao, prazo} = createSchemaData.parse(request.body)
    const useCaseProjeto = MakeCreateProjeto()

    try {
        await useCaseProjeto.execute({
            nome,
            descricao,
            prazo
        })
    } catch (err) {
        if (err instanceof Error) {
            return reply.status(409).send({ message: err.message })
        }

        throw err
    }


    return reply.status(201).send()
}