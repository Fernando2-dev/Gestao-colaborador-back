import { FastifyInstance } from "fastify";
import { createProjeto } from "./createProjeto";
import { createTecnologia } from "./createTecnologia";
import { getProjeto } from "./getProjeto";
import { getTecnologia } from "./getTecnologia";

export async function routerProjeto(app: FastifyInstance) {
    app.post('/projeto', createProjeto)
    app.get('/projeto', getProjeto)

    app.post('/projeto/tecnologia', createTecnologia)
    app.get('/projeto/tecnologia', getTecnologia)
}