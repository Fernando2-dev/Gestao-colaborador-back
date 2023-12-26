import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";
import { routerColaborador } from "./http/controller/colaborador/router";
import { routerProjeto } from "./http/controller/projeto/router";
import { env } from "./env";

export const app = fastify();

app.register(fastifyCors, {
  origin: true, 
  credentials: true,
});

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
});

app.register(fastifyCookie);
app.register(routerColaborador);
app.register(routerProjeto);