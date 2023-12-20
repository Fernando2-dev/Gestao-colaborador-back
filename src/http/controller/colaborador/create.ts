import { EmailExistente } from "@/useCase/error/emailExistente";
import { MakeCreateColaborador } from "@/useCase/fatories/make-create-colaborador";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {

    const createSchemaData = z.object({
        nome: z.string(),
        idade: z.string(),
        email: z.string().email(),
        senha: z.string().min(6),
        regimeContratacao: z.enum(['CLT', 'PJ']),
        areaAtuacao: z.array(z.enum(['FRONTEND', 'BACKEND', 'INFRAESTRUTURA', 'DESIGN', 'REQUISITOS', 'GESTAO']))
    })

    const { nome, email, areaAtuacao, idade, regimeContratacao, senha } = createSchemaData.parse(request.body)
    const useCaseColaborador =  MakeCreateColaborador()

    try{
        await useCaseColaborador.execute({
            nome, 
            idade,
            email,
            senha,
            regimeContratacao,
            areaAtuacao
        })
    } catch(err){
        if (err instanceof EmailExistente) {
            return reply.status(409).send({ message: err.message })
          }
      
          throw err
    }
    

    return reply.status(201).send()
}