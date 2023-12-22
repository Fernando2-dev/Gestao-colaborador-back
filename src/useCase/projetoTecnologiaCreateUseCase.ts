import { IProjetoColaborador, ProjetoColaboradorRepository } from "@/repositories/interfaces/projetoColaborador-repository";
import { ITecnologiaProjeto, ProjetoTecnologiaRepository } from "@/repositories/interfaces/projetoTecnologia-repository";
import {  ColaboradorProjeto, ProjetoTecnologia} from "@prisma/client";

interface ProjetoTecnologiaResponse {
    projetoTecnologia: ProjetoTecnologia;
}

export class ProjetoTecnologiaUseCase {
    constructor(private projetoColaboradorRepository: ProjetoTecnologiaRepository) { }

    async execute({ projeto_id, tecnologia_id }: ITecnologiaProjeto): Promise<ProjetoTecnologiaResponse> {
        const projetoTecnologia = await this.projetoColaboradorRepository.create({
             tecnologia_id,
            projeto_id,
        });
        return {
            projetoTecnologia,
        };
    }
}
