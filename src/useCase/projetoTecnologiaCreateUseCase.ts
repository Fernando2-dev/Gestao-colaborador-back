import { IProjetoColaborador, ProjetoColaboradorRepository } from "@/repositories/interfaces/projetoColaborador-repository";
import { ITecnologiaProjeto, ProjetoTecnologiaRepository } from "@/repositories/interfaces/projetoTecnologia-repository";
import {  ColaboradorProjeto, ProjetoTecnologia} from "@prisma/client";

interface ProjetoTecnologiaResponse {
    projetoTecnologia: ITecnologiaProjeto[];
}

export class ProjetoTecnologiaUseCase {
    constructor(private projetoTecnologiaRepository: ProjetoTecnologiaRepository) { }

    async execute({ tecnologia_id, projeto_id }: ITecnologiaProjeto): Promise<ProjetoTecnologiaResponse> {
        const projetoTecnologia = await this.projetoTecnologiaRepository.create({
           projeto_id,
           tecnologia_id
        });
        return {
            projetoTecnologia,
        };
    }
}
