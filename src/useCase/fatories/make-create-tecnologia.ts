import { PrismaTecnologiaRepository } from "@/repositories/prisma/prisma-tecnologia-repository";
import { TecnologiaCreatedUseCase } from "../tecnologiaCreateUseCase";

export function MakeCreateTecnologia() {
    const prismaTecnologiaRepository = new PrismaTecnologiaRepository;
    const tecnologiaCreateUseCase = new TecnologiaCreatedUseCase(prismaTecnologiaRepository)

    return tecnologiaCreateUseCase;
}