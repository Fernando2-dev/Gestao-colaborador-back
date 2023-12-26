import { MakeGetTecnologia } from "@/useCase/fatories/make-get-tecnologia";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getTecnologia(request: FastifyRequest, reply: FastifyReply) {
    const useCaseTecnologia = MakeGetTecnologia()
    try {
        const tecnologia = await useCaseTecnologia.execute()
        return reply.status(200).send(tecnologia)
    } catch (err) {
        return reply.status(500).send()
    }

}