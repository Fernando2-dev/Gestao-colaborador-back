import fastify from "fastify";
import { routerColaborador } from "./http/controller/colaborador/router";
import { routerProjeto } from "./http/controller/projeto/router";

export const app = fastify()

app.register(routerColaborador)
app.register(routerProjeto)