import { MakeUpdateColaborador } from "@/useCase/fatories/make-update-colaborador";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateColaborador(request: FastifyRequest, reply: FastifyReply) {

    const updateSchemaData = z.object({
        id: z.number(),
        nome: z.string(),
        idade: z.string(),
        email: z.string().email(),
        senha: z.string().min(6),
        regime_contratacao: z.enum(['CLT', 'PJ']),
        projetoId: z.number()
    })

    const { id,nome, email, idade, regime_contratacao, senha, projetoId } = updateSchemaData.parse(request.body)
    const useCaseColaborador =  MakeUpdateColaborador()

    try{
      const colaborador = await useCaseColaborador.execute({
            id,
            nome, 
            idade,
            email,
            senha,
            regime_contratacao,
            projetoId
         })
         return reply.status(200).send(colaborador)
    } catch(err){
        throw new Error()
    }
    
}