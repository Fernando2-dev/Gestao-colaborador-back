import { IProjetoColaborador, ProjetoColaboradorRepository } from "@/repositories/interfaces/projetoColaborador-repository";
import {  ColaboradorProjeto} from "@prisma/client";

interface ProjetoColaboradorResponse {
    projetoColaborador: ColaboradorProjeto;
}

export class ProjetoColaboradorUseCase {
    constructor(private projetoColaboradorRepository: ProjetoColaboradorRepository) { }

    async execute({ projeto_id, colaborador_id }: IProjetoColaborador): Promise<ProjetoColaboradorResponse> {
        const projetoColaborador = await this.projetoColaboradorRepository.create({
            colaborador_id,
            projeto_id,
        });
        return {
            projetoColaborador,
        };
    }
}
