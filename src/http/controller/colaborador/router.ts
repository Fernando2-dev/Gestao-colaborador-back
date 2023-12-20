import { FastifyInstance } from "fastify";
import { createColaborador } from "./createColaborador";
import { createAreaAtuacao } from "./createAreaAtuacao";
import { createColaboradorAreaAtuacao } from "./createColaboradorAreaAtuacao";

export async function routerColaborador(app: FastifyInstance) {
    app.post('/colaborador', createColaborador)
    app.post('/colaborador/areaAtuacao', createAreaAtuacao)
    app.post('/colaborador/areaAtuacaoColaborador', createColaboradorAreaAtuacao)
}