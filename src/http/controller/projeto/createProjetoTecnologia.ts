import { MakeProjetoColaborador } from "@/useCase/fatories/make-create-projetoColaborador";
import { MakeProjetoTecnologia } from "@/useCase/fatories/make-create-projetoTecnologia";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createProjetoTecnologia(request: FastifyRequest, reply: FastifyReply) {
    const createSchemaData = z.object({
         projetoTecnologia: z.array(
            z.object({
                projeto_id: z.number(),
                tecnologia_id: z.number(),
            })
        ),
    });

    const { projetoTecnologia } = createSchemaData.parse(request.body);
    const useCaseProjetoTecnologia = MakeProjetoTecnologia();
    try {
        
        await Promise.all(
            projetoTecnologia.map(async ({ projeto_id, tecnologia_id }) => {
                await useCaseProjetoTecnologia.execute({
                    projeto_id,
                    tecnologia_id,
                });
            })
        );
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ message: error.message })
        }
    }

    return reply.status(201).send();
}
