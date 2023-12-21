import { MakePerfil } from "@/useCase/fatories/make-perfil";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function Perfil(request: FastifyRequest, replay: FastifyReply) {
    const schemaAutenticacao = z.object({
        id: z.string().refine((value) => !isNaN(Number(value))),
    })

    const { id } = schemaAutenticacao.parse(request.params)
    const useCasePerfil = MakePerfil()

    try {
        const numericId = Number(id);
       const colaborador = await useCasePerfil.execute({
            id: numericId
        })
        return replay.status(200).send(colaborador)
    } catch (error) {

    }
    
}