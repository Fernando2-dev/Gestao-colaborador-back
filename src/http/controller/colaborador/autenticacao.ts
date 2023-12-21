import { CredenciaisInvalidas } from "@/useCase/error/credenciaisInvalida";
import { MakeAutenticao } from "@/useCase/fatories/make-autenticacao";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function Autenticacao(request: FastifyRequest, reply: FastifyReply) {
    const schemaAutenticacao = z.object({
        email: z.string(),
        senha: z.string()
    })

    const { email, senha } = schemaAutenticacao.parse(request.body)
    const useCaseAutenticacao = MakeAutenticao()

    try {
       const { colaborador } = await useCaseAutenticacao.execute({
            email,
            senha
        })

        console.log('ID do colaborador:', colaborador.id);

        const token = await reply.jwtSign({}, {
          sign: {
            sub: colaborador.id.toString(),
          },
        });   

        return reply.status(200).send({token})
    } catch (error) {
        if (error instanceof CredenciaisInvalidas) {
            return reply.status(400).send({ message: error.message })
          }
          throw error
    }
    
    
}