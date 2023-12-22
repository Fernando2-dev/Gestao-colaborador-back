import { MakeGetColaborador } from "@/useCase/fatories/make-get-colaborador";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getColaborador(request: FastifyRequest, reply: FastifyReply) {
    const useCaseColaborador =  MakeGetColaborador()
    try{
      const colaborador = await useCaseColaborador.execute()
       return reply.status(200).send({colaborador})
    } catch(err){
        return reply.status(500).send(err)
    }
    
}