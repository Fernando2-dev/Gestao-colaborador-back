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
import { createProjetoTecnologia } from "./createProjetoTecnologia";

export async function routerProjeto(app: FastifyInstance) {
    app.post('/projeto/colaborador', createProjetoColaborador)
    app.post('/projeto/projetoTecnologia', createProjetoTecnologia)

    app.post('/projeto', {onRequest: [verifyJwt, verifyUserRole("GESTOR")]}, createProjeto)
    app.get('/projeto',{onRequest: [verifyJwt]}, getProjeto)
    app.put('/projeto', {onRequest: [verifyJwt]},updateProjeto)
    app.delete('/projeto/:id', {onRequest: [verifyJwt ]}, deleteProjeto)

    app.post('/projeto/tecnologia',{onRequest: [verifyJwt, verifyUserRole("GESTOR")]}, createTecnologia)
    app.get('/projeto/tecnologia', {onRequest: [verifyJwt, verifyUserRole("GESTOR")]},getTecnologia)
    app.patch('/projeto/tecnologia',{onRequest: [verifyJwt, verifyUserRole("GESTOR")]}, putTecnologia)
    app.delete('/projeto/tecnologia/:id',{onRequest: [verifyJwt, verifyUserRole("GESTOR")]}, deleteTecnologia)
}