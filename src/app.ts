import fastify from "fastify";
import { appRouter } from "./http/controller/colaborador/router";

export const app = fastify()

app.register(appRouter)