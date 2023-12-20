import { MakeUpdateProjeto } from "@/useCase/fatories/make-update-projeto";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateProjeto(request: FastifyRequest, reply: FastifyReply) {

    const updateSchemaData = z.object({
        id: z.number(),
        nome: z.string(),
        descricao: z.string(),
        prazo: z.string()
    })

    const { id,nome, descricao, prazo } = updateSchemaData.parse(request.body)
    const useCaseProjeto =  MakeUpdateProjeto()

    try{
      const projeto = await useCaseProjeto.execute({
            id,
            nome, 
            descricao,
            prazo
         })
         return reply.status(200).send(projeto)
    } catch(err){
        throw new Error()
    }
    
}