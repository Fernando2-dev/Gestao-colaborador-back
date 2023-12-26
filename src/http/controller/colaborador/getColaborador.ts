import { MakeGetColaborador } from "@/useCase/fatories/make-get-colaborador";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getColaborador(request: FastifyRequest, reply: FastifyReply) {
    const useCaseColaborador = MakeGetColaborador()
    try {
        const colaboradores = await useCaseColaborador.execute();
         
        return reply.status(200).send(colaboradores)
    } catch (err) {
        return reply.status(500).send(err)
    }
    
}