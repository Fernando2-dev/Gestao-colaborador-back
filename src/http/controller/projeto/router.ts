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

export async function routerProjeto(app: FastifyInstance) {
    app.post('/projeto/colaborador', createProjetoColaborador)
    app.post('/projeto/projetoTecnologia', createProjetoTecnologia)

    app.post('/projeto', createProjeto)
    app.get('/projeto', getProjeto)
    app.put('/projeto', updateProjeto)
    app.delete('/projeto/:id', deleteProjeto)

    app.post('/projeto/tecnologia' ,createTecnologia)
    app.get('/projeto/tecnologia',getTecnologia)
    app.patch('/projeto/tecnologia' ,putTecnologia)
    app.delete('/projeto/tecnologia/:id', deleteTecnologia)
}