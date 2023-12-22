import { MakeGetColaborador } from "@/useCase/fatories/make-get-colaborador";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getColaborador(request: FastifyRequest, reply: FastifyReply) {
    const useCaseColaborador = MakeGetColaborador()
    try {
        const colaboradores = await useCaseColaborador.execute();
        
        const colaboradorLista = colaboradores.map(colaborador => {
            if (colaborador.role === "GESTOR") {
                return colaborador;
            } else {
                const { regime_contratacao, senha, ...colaboradorSemDadosSensiveis } = colaborador;
                return colaboradorSemDadosSensiveis;
            }
        });
        
        return reply.status(200).send(colaboradorLista)
    } catch (err) {
        return reply.status(500).send(err)
    }

}