import { FastifyInstance } from "fastify";
import { createColaborador } from "./createColaborador";
import { createAreaAtuacao } from "./createAreaAtuacao";
import { createColaboradorAreaAtuacao } from "./createColaboradorAreaAtuacao";
import { getColaborador } from "./getColaborador";
import { getAreaAtuacao } from "./getAreaAtuacao";

export async function routerColaborador(app: FastifyInstance) {
    
    app.post('/colaborador', createColaborador)
    app.get('/colaborador', getColaborador)

    app.post('/colaborador/areaAtuacao', createAreaAtuacao)
    app.get('/colaborador/areaAtuacao', getAreaAtuacao)

    app.post('/colaborador/areaAtuacaoColaborador', createColaboradorAreaAtuacao)
}