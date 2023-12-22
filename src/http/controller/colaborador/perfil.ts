import { MakePerfil } from '@/useCase/fatories/make-perfil'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function Perfil(request: FastifyRequest, reply: FastifyReply) {
    await request.jwtVerify()
    const getUserProfile = MakePerfil()
    const userId = parseInt(request.user.sub);
   
    const { colaborador } = await getUserProfile.execute({
        id: userId
    })

    return reply.status(200).send({
        user: {
            ...colaborador,
            senha: undefined,
        },
    })
}
