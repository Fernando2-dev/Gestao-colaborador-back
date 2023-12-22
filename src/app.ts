import fastify from "fastify";
import { routerColaborador } from "./http/controller/colaborador/router";
import { routerProjeto } from "./http/controller/projeto/router";
import { env } from "./env";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";

export const app = fastify()


app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie:{
     cookieName:'refreshToken' ,
     signed: false
    } ,
    sign: {
      expiresIn: '10m'
    }
})
app.register(fastifyCookie)
app.register(routerColaborador)
app.register(routerProjeto)