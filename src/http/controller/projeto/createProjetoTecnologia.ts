import { MakeProjetoColaborador } from "@/useCase/fatories/make-create-projetoColaborador";
import { MakeProjetoTecnologia } from "@/useCase/fatories/make-create-projetoTecnologia";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createProjetoTecnologia(request: FastifyRequest, reply: FastifyReply) {
    const createSchemaData = z.object({
        tecnologia_id: z.number(),
        projeto_id: z.number()
    });

    const { tecnologia_id , projeto_id} = createSchemaData.parse(request.body);
    const useCaseColaboradorAreaAtuacao = MakeProjetoTecnologia();
    try {
        
        await useCaseColaboradorAreaAtuacao.execute({
            tecnologia_id,
            projeto_id 
        });
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ message: error.message })
        }
    }

    return reply.status(201).send();
}
