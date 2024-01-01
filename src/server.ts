import { env } from "./env";
import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";
import { routerColaborador } from "./http/controller/colaborador/router";
import { routerProjeto } from "./http/controller/projeto/router";

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
app.listen({
    host: '0.0.0.0',
    port: env.PORT,
}).then(() => {
  console.log("Http subiu")
})