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


        const token = await reply.jwtSign(
            {
                role: colaborador.role
            }, {
            sign: {
                sub: colaborador.id.toString(),
            },
        });
        const refreshToken = await reply.jwtSign(
            {
                role: colaborador.role
            }, {
            sign: {
                sub: colaborador.id.toString(),
                expiresIn: '7d',
            },
        });

        return reply
        .setCookie('refreshToken', refreshToken, {
           path: "/",
           secure: true,
           sameSite: true,
           httpOnly: true  
        })
        .status(200)
        .send({ token })
    } catch (error) {
        if (error instanceof CredenciaisInvalidas) {
            return reply.status(400).send({ message: error.message })
        }
        throw error
    }


}