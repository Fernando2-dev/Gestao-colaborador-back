import { FastifyInstance } from "fastify";
import { createProjeto } from "./createProjeto";
import { createTecnologia } from "./createTecnologia";

export async function routerProjeto(app: FastifyInstance) {
    app.post('/projeto', createProjeto)
    app.post('/projeto/tecnologia', createTecnologia)
}