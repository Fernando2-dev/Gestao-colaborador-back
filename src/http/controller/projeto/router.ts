import { FastifyInstance } from "fastify";
import { createProjeto } from "./createProjeto";
import { createTecnologia } from "./createTecnologia";
import { getProjeto } from "./getProjeto";
import { getTecnologia } from "./getTecnologia";
import { updateProjeto } from "./putProjeto";
import { putTecnologia } from "./putAreaAtuacao";
import { deleteProjeto } from "./deleteProjeto";
import { deleteTecnologia } from "./deleteTecnologia";
import { verifyJwt } from "../middlewares/verify-jwt";
import { createProjetoColaborador } from "./createProjetoColaborador";
import { verifyUserRole } from "../middlewares/verify-user-role";

export async function routerProjeto(app: FastifyInstance) {
    app.post('/projeto/colaborador', {onRequest: [verifyUserRole("GESTOR")]}, createProjetoColaborador)

    app.post('/projeto', { onRequest: [verifyJwt] } ,createProjeto)
    app.get('/projeto', { onRequest: [verifyJwt] },getProjeto)
    app.put('/projeto', { onRequest: [verifyJwt] },updateProjeto)
    app.delete('/projeto/:id', {onRequest: [verifyUserRole("GESTOR")]},deleteProjeto)

    app.post('/projeto/tecnologia', { onRequest: [verifyJwt] },createTecnologia)
    app.get('/projeto/tecnologia', { onRequest: [verifyJwt] },getTecnologia)
    app.patch('/projeto/tecnologia', { onRequest: [verifyJwt] },putTecnologia)
    app.delete('/projeto/tecnologia/:id', { onRequest: [verifyJwt] } ,deleteTecnologia)
}