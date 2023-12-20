
import { MakeUpdateProjeto } from "@/useCase/fatories/make-update-projeto";
import { MakeUpdateTecnologia } from "@/useCase/fatories/make-update-tecnologia";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function putTecnologia(request: FastifyRequest, reply: FastifyReply) {

    const updateSchemaData = z.object({
        id: z.number(),
        nome_tecnologia: z.string()
    })

    const { id, nome_tecnologia} = updateSchemaData.parse(request.body)
    const useCaseTecnologia =  MakeUpdateTecnologia()

    try{
      const tecnologia = await useCaseTecnologia.execute({
            id,
            nome_tecnologia
         })
         return reply.status(200).send(tecnologia)
    } catch(err){
        throw new Error()
    }
    
}