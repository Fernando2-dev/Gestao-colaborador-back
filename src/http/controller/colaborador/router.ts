import { FastifyInstance } from "fastify";
import { Autenticacao } from "./autenticacao";
import { createAreaAtuacao } from "./createAreaAtuacao";
import { createColaborador } from "./createColaborador";
import { deleteColaborador } from "./deleteColaborador";
import { getColaborador } from "./getColaborador";
import { updateColaborador } from "./putColaborador";
import { createColaboradorAreaAtuacao } from "./createColaboradorAreaAtuacao";
import { getAreaAtuacao } from "./getAreaAtuacao";
import { updateAtuacao } from "./putAreaAtuacao";
import { deleteAreaAtuacao } from "./deleteAreaAtuacao";
import { Perfil } from "./perfil";
import { verifyJwt } from "../middlewares/verify-jwt";
import { deleteColaboradorAreaAtuacao } from "./deleteColaboradorAreaAtuacao";
import { verifyUserRole } from "../middlewares/verify-user-role";

export async function routerColaborador(app: FastifyInstance) {
    //auth
    app.post('/auth', Autenticacao)
    app.get('/colaborador/perfil', Perfil)

    app.post('/colaborador', { onRequest: [verifyJwt, verifyUserRole("GESTOR")] }, createColaborador)
    app.put('/colaborador', { onRequest: [verifyJwt] }, updateColaborador)
    app.delete('/colaborador/:id', { onRequest: [verifyJwt, verifyUserRole("GESTOR")] }, deleteColaborador)
    app.get('/colaborador', getColaborador)


    app.post('/colaborador/areaAtuacaoColaborador', { onRequest: [verifyJwt, verifyUserRole("GESTOR")] }, createColaboradorAreaAtuacao)
    app.delete('/colaborador/areaAtuacaoColaborador', { onRequest: [verifyJwt, verifyUserRole("GESTOR")] }, deleteColaboradorAreaAtuacao)

    app.post('/colaborador/areaAtuacao', { onRequest: [verifyJwt, verifyUserRole("GESTOR")] }, createAreaAtuacao)
    app.get('/colaborador/areaAtuacao', getAreaAtuacao)
    app.put('/colaborador/areaAtuacao', { onRequest: [verifyJwt, verifyUserRole("GESTOR")] }, updateAtuacao)
    app.delete('/colaborador/areaAtuacao/:id', { onRequest: [verifyJwt, verifyUserRole("GESTOR")] }, deleteAreaAtuacao)





}