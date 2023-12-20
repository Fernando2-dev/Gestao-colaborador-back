import { FastifyInstance } from "fastify";
import { createColaborador } from "./createColaborador";
import { createAreaAtuacao } from "./createAreaAtuacao";
import { createColaboradorAreaAtuacao } from "./createColaboradorAreaAtuacao";
import { getColaborador } from "./getColaborador";
import { getAreaAtuacao } from "./getAreaAtuacao";
import { updateColaborador } from "./putColaborador";
import { updateAtuacao } from "./putAreaAtuacao";

export async function routerColaborador(app: FastifyInstance) {
    
    app.post('/colaborador', createColaborador)
    app.get('/colaborador', getColaborador)
    app.put('/colaborador', updateColaborador)

    app.post('/colaborador/areaAtuacao', createAreaAtuacao)
    app.get('/colaborador/areaAtuacao', getAreaAtuacao)
    app.patch('/colaborador/areaAtuacao', updateAtuacao);

    app.post('/colaborador/areaAtuacaoColaborador', createColaboradorAreaAtuacao)
}