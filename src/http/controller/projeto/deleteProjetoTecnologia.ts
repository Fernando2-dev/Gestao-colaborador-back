import { MakeCreateColaboradorAreaAtuacao } from "@/useCase/fatories/make-create-colaboradorAreaAtuacao";
import { MakeProjetoColaborador } from "@/useCase/fatories/make-create-projetoColaborador";
import { MakeProjetoColaboradorDelete } from "@/useCase/fatories/make-delete-projetoColaborador";
import { MakeProjetoTecnologiaDelete } from "@/useCase/fatories/make-delete-projetoTecnologia";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteProjetoTecnologia(request: FastifyRequest, reply: FastifyReply) {
    const createSchemaData = z.object({
        vinculoTecnologia: z.array(
            z.object({
                projeto_id: z.number(),
                tecnologia_id: z.number(),
            })
        ),
    });

    const { vinculoTecnologia} = createSchemaData.parse(request.body);
    const useCaseProjetoTecnologia = MakeProjetoTecnologiaDelete();
    
    try {
        await Promise.all(
            vinculoTecnologia.map(async ({ projeto_id, tecnologia_id }) => {
                await useCaseProjetoTecnologia.execute({
                    projeto_id,
                    tecnologia_id,
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
