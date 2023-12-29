import { EmailExistente } from "@/useCase/error/emailExistente";
import { MakeCreateColaborador } from "@/useCase/fatories/make-create-colaborador";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createColaborador(request: FastifyRequest, reply: FastifyReply) {

    const createSchemaData = z.object({
        nome: z.string(),
        idade: z.string(),
        email: z.string().email(),
        senha: z.string().min(6),
        regime_contratacao: z.enum(['CLT', 'PJ']),
    })

    const { nome, email, idade, regime_contratacao, senha } = createSchemaData.parse(request.body)
    
    const useCaseColaborador =  MakeCreateColaborador()

    try{
      const colaborador = await useCaseColaborador.execute({
            nome, 
            idade,
            email,
            senha,
            regime_contratacao,
         })
         return reply.status(201).send(colaborador)
    } catch(err){
        if (err instanceof EmailExistente) {
            return reply.status(409).send({ message: err.message })
          }
      
          throw err
    }
    

   
}