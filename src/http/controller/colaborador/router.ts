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
import { verifyUserRole } from "../middlewares/verify-user-role";
import { verifyJwt } from "../middlewares/verify-jwt";

export async function routerColaborador(app: FastifyInstance) {
    //auth
    app.post('/auth', Autenticacao)
    app.get('/colaborador/perfil', Perfil)

    app.post('/colaborador', createColaborador)
    app.put('/colaborador', updateColaborador)
    app.delete('/colaborador/:id', deleteColaborador)
    app.get('/colaborador',  getColaborador)

    
    app.post('/colaborador/areaAtuacaoColaborador', createColaboradorAreaAtuacao)
    
    app.post('/colaborador/areaAtuacao',createAreaAtuacao)
    app.get('/colaborador/areaAtuacao',getAreaAtuacao)
    app.put('/colaborador/areaAtuacao',updateAtuacao)
    app.delete('/colaborador/areaAtuacao/:id',deleteAreaAtuacao)
    


    
 
}