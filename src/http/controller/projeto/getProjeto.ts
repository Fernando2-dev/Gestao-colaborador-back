import { MakeGetProjeto } from "@/useCase/fatories/make-get-projeto";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getProjeto(request: FastifyRequest, reply: FastifyReply) {
    const useCaseProjeto = MakeGetProjeto()
    try {
        const projeto = await useCaseProjeto.execute()
        return reply.status(200).send({ projeto })
    } catch (err) {
        return reply.status(500).send()
    }

}