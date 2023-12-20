import { ProjetoGetdUseCase } from "../projetoGetUseCase";
import { PrismaTecnologiaRepository } from "@/repositories/prisma/prisma-tecnologia-repository";
import { TecnologiaCreatedUseCase } from "../tecnologiaCreateUseCase";
import { TecnologiaGetdUseCase } from "../tecnologiaGetUseCase";

export function MakeGetTecnologia(){
    const tecnologiaRepository = new PrismaTecnologiaRepository()
    const tecnologiaGetUseCase = new TecnologiaGetdUseCase(tecnologiaRepository)

    return tecnologiaGetUseCase
}