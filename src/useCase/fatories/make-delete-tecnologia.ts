import { PrismaTecnologiaRepository } from "@/repositories/prisma/prisma-tecnologia-repository";
import { TecnologiaDeleteUseCase } from "../tecnologiaDeleteUseCase";

export function MakeDeleteTecnologia(){
    const tecnologiaRepository = new PrismaTecnologiaRepository()
    const projetoDeleteUseCase = new TecnologiaDeleteUseCase(tecnologiaRepository)

    return projetoDeleteUseCase
}