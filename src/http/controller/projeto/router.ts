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
import { createProjetoTecnologia } from "./createProjetoTecnologia";
import { deleteProjetoColaborador } from "./deleteProjetoColaborador";
import { deleteProjetoTecnologia } from "./deleteProjetoTecnologia";
import { verifyUserRole } from "../middlewares/verify-user-role";

export async function routerProjeto(app: FastifyInstance) {
    app.post('/projeto/colaborador', { onRequest: [verifyJwt, verifyUserRole("GESTOR")] }, createProjetoColaborador)
    app.delete('/projeto/colaborador',{ onRequest: [verifyJwt ] }, deleteProjetoColaborador)

    app.post('/projeto/projetoTecnologia',  { onRequest: [verifyJwt,verifyUserRole("GESTOR")] }, createProjetoTecnologia)
    app.delete('/projeto/projetoTecnologia', { onRequest: [verifyJwt,verifyUserRole("GESTOR")] }, deleteProjetoTecnologia)

    app.post('/projeto', { onRequest: [verifyJwt ] }, createProjeto)
    app.get('/projeto', getProjeto)
    app.put('/projeto', { onRequest: [verifyJwt ] }, updateProjeto)
    app.delete('/projeto/:id', { onRequest: [verifyJwt ] }, deleteProjeto)

    app.post('/projeto/tecnologia', { onRequest: [verifyJwt ] }, createTecnologia)
    app.get('/projeto/tecnologia', getTecnologia)
    app.patch('/projeto/tecnologia', { onRequest: [verifyJwt ] }, putTecnologia)
    app.delete('/projeto/tecnologia/:id', { onRequest: [verifyJwt, verifyUserRole("GESTOR")] }, deleteTecnologia)
}