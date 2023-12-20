import { PrismaTecnologiaRepository } from "@/repositories/prisma/prisma-tecnologia-repository";
import { TecnologiaUpdateUseCase } from "../tecnologiaUpdateUseCase";

export function MakeUpdateTecnologia(){
    const tecnologiaRepository = new PrismaTecnologiaRepository()
    const tecnologiaUpdateUseCase = new TecnologiaUpdateUseCase(tecnologiaRepository)

    return tecnologiaUpdateUseCase
}