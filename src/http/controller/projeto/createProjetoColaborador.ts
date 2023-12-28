import { MakeCreateColaboradorAreaAtuacao } from "@/useCase/fatories/make-create-colaboradorAreaAtuacao";
import { MakeProjetoColaborador } from "@/useCase/fatories/make-create-projetoColaborador";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createProjetoColaborador(request: FastifyRequest, reply: FastifyReply) {
    const createSchemaData = z.object({
        ColaboradorProjeto: z.array(
            z.object({
                projeto_id: z.number(),
                colaborador_id: z.number(),
            })
        ),
    });

    const { ColaboradorProjeto} = createSchemaData.parse(request.body);
    const useCaseColaboradorAreaAtuacao = MakeProjetoColaborador();
    
    try {
        await Promise.all(
            ColaboradorProjeto.map(async ({ projeto_id, colaborador_id }) => {
                await useCaseColaboradorAreaAtuacao.execute({
                    projeto_id,
                    colaborador_id,
                });
            })
        );
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(404).send({ message: error.message });
        }
    }

    return reply.status(201).send();
}
