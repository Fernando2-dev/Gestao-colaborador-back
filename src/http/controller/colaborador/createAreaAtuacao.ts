import { AreaAtuacaoExistente } from "@/useCase/error/areaAtuacaoExistente";
import { MakeCreateAreaAtuacao } from "@/useCase/fatories/make-create-areaAtuacao";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createAreaAtuacao(request: FastifyRequest, reply: FastifyReply) {

    const createSchemaData = z.object({
        area_atuacao: z.string()
    })

    const { area_atuacao } = createSchemaData.parse(request.body)
    const useCaseAreaAtucao = MakeCreateAreaAtuacao()

    try {
        await useCaseAreaAtucao.execute({
            area_atuacao
        })
    } catch (err) {
        if (err instanceof AreaAtuacaoExistente) {
            return reply.status(409).send({ message: err.message })
        }

        throw err
    }


    return reply.status(201).send()
}