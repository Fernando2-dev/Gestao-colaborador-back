import { Colaborador, ColaboradorRepository } from "@/repositories/interfaces/colaborador-repository";
import { CredenciaisInvalidas } from "./error/credenciaisInvalida";

interface PerfilcaoRequest {
    id: number
}

interface PerfilResponse {
    colaborador: Colaborador;
}

export class PerfilUseCase {
    constructor(private usePerfilRepository: ColaboradorRepository) {}

    async execute({ id }: PerfilcaoRequest): Promise<PerfilResponse> {
        const colaborador = await this.usePerfilRepository.findById(id);

        if (!colaborador) {
            throw new CredenciaisInvalidas();
        }
        return {
            colaborador,
        };
    }
}
