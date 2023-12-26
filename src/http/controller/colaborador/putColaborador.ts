import { MakeUpdateColaborador } from "@/useCase/fatories/make-update-colaborador";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateColaborador(request: FastifyRequest, reply: FastifyReply) {

    const updateSchemaData = z.object({
        id: z.number(),
        nome: z.string(),
        idade: z.string(),
        email: z.string().email(),
        regime_contratacao: z.enum(['CLT', 'PJ']),
        role: z.enum(['MEMBRO', 'GESTOR']),
    });
    

    const { id, nome, email, idade, regime_contratacao, role } = updateSchemaData.parse(request.body);
    const useCaseColaborador =  MakeUpdateColaborador();

    try {
        const colaborador = await useCaseColaborador.execute({
            id,
            nome, 
            idade,
            email,
            regime_contratacao,
            role,
        });
        return reply.status(200).send(colaborador);
    } catch(err) {
        console.error(err);
        return reply.status(500).send({ error: "Internal Server Error" });
    }
    
}
