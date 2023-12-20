import { MakeUpdateAreaAtuacao } from "@/useCase/fatories/make-update-areaAtuacao";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateAtuacao(request: FastifyRequest, reply: FastifyReply) {

    const updateSchemaData = z.object({
        id: z.number(),
        area_atuacao: z.string()
    })

    const { id, area_atuacao } = updateSchemaData.parse(request.body)
    const useCaseAreaAtuacao =  MakeUpdateAreaAtuacao()

    try{
      const areaAtuacao = await useCaseAreaAtuacao.execute({
            id,
            area_atuacao
         })
         return reply.status(200).send(areaAtuacao)
    } catch(err){
        throw new Error()
    }
    
}