import { NotFound } from "@/useCase/error/notFound";
import { MakeUpdateColaborador } from "@/useCase/fatories/make-update-colaborador";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateColaborador(request: FastifyRequest, reply: FastifyReply) {

    const updateSchemaData = z.object({
        id: z.number(),
        nome: z.string().optional(),
        idade: z.string().optional(),
        email: z.string().email().optional(),
        regime_contratacao: z.enum(['CLT', 'PJ']).optional(),
        role: z.enum(['MEMBRO', 'GESTOR']).optional(),
        senha: z.string().optional()
    });
    

    const { id, nome, email, idade, regime_contratacao, role } = updateSchemaData.parse(request.body);
    const useCaseColaborador =  MakeUpdateColaborador();

    try {
        await useCaseColaborador.execute({
            id,
            nome, 
            idade,
            email,
            regime_contratacao,
            role,
        });
        return reply.status(200).send();
    } catch (err) {
        if (err instanceof NotFound) {
            return reply.status(404).send({ message: err.message });
        }

        return reply.status(500).send({ message: 'Erro interno do servidor' });
    }
}
