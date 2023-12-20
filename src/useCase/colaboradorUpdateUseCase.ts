import { ColaboradorRepository } from "@/repositories/interfaces/colaborador-repository";
import { Colaborador, Prisma } from "@prisma/client";



interface ColaboradorUpdateUseCaseResponse {
    colaborador: Colaborador
}

export class ColaboradorUpdateUseCase {

    constructor(private colaboradorRepository: ColaboradorRepository) { }

    async execute({ id, nome, email, idade, regime_contratacao, senha, projetoId }: Colaborador): Promise<ColaboradorUpdateUseCaseResponse> {
        const colaborador = await this.colaboradorRepository.update({
            id,
            nome,
            idade,
            email,
            senha,
            regime_contratacao,
            projetoId
        })
        return {
            colaborador
        }
    }
}