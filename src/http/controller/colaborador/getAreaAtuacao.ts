import { MakeGetAreaAtuacao } from "@/useCase/fatories/make-get-areaAtuacao";
import { MakeGetColaborador } from "@/useCase/fatories/make-get-colaborador";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAreaAtuacao(request: FastifyRequest, reply: FastifyReply) {
    const useCaseColaborador =  MakeGetAreaAtuacao()
    try{
      const areaAtuacao = await useCaseColaborador.execute()
       return reply.status(200).send({areaAtuacao})
    } catch(err){
        return reply.status(500).send()
    }
    
}