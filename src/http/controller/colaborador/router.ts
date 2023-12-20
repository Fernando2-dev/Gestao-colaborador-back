import { FastifyInstance } from "fastify";
import { create } from "./create";

export async function appRouter(app: FastifyInstance){
app.post('/colaborador', create)
}