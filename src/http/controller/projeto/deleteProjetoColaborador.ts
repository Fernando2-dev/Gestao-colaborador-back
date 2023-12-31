import { MakeCreateColaboradorAreaAtuacao } from "@/useCase/fatories/make-create-colaboradorAreaAtuacao";
import { MakeProjetoColaborador } from "@/useCase/fatories/make-create-projetoColaborador";
import { MakeProjetoColaboradorDelete } from "@/useCase/fatories/make-delete-projetoColaborador";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteProjetoColaborador(request: FastifyRequest, reply: FastifyReply) {
    const createSchemaData = z.object({
        vinculoProjeto: z.array(
            z.object({
                projeto_id: z.number(),
                colaborador_id: z.number(),
            })
        ),
    });

    const { vinculoProjeto} = createSchemaData.parse(request.body);
    const useCaseProjetoColaborador = MakeProjetoColaboradorDelete();
    
    try {
        await Promise.all(
            vinculoProjeto.map(async ({ projeto_id, colaborador_id }) => {
                await useCaseProjetoColaborador.execute({
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

    return reply.status(204).send();
}
