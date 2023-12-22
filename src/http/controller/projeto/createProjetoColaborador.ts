import { MakeCreateColaboradorAreaAtuacao } from "@/useCase/fatories/make-create-colaboradorAreaAtuacao";
import { MakeProjetoColaborador } from "@/useCase/fatories/make-create-projetoColaborador";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createProjetoColaborador(request: FastifyRequest, reply: FastifyReply) {
    const createSchemaData = z.object({
        colaborador_id: z.number(),
        projeto_id: z.number()
    });

    const { colaborador_id , projeto_id} = createSchemaData.parse(request.body);
    const useCaseColaboradorAreaAtuacao = MakeProjetoColaborador();
    try {
        
        await useCaseColaboradorAreaAtuacao.execute({
            colaborador_id,
            projeto_id 
        });
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ message: error.message })
        }
    }

    return reply.status(201).send();
}
