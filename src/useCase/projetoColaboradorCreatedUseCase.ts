import { IProjetoColaborador, ProjetoColaboradorRepository } from "@/repositories/interfaces/projetoColaborador-repository";
import {  ColaboradorProjeto} from "@prisma/client";

interface ProjetoColaboradorResponse {
    ColaboradorProjeto: ColaboradorProjeto[];
}

export class ProjetoColaboradorUseCase {
    constructor(private projetoColaboradorRepository: ProjetoColaboradorRepository) { }

    async execute({ projeto_id, colaborador_id }: IProjetoColaborador): Promise<ProjetoColaboradorResponse> {
        const ColaboradorProjeto = await this.projetoColaboradorRepository.create({
            colaborador_id,
            projeto_id,
        });
        return {
            ColaboradorProjeto,
        };
    }
}
