import { Colaborador, ColaboradorRepository } from "@/repositories/interfaces/colaborador-repository";



interface ColaboradorUpdateUseCaseResponse {
    colaborador: Colaborador
}

export class ColaboradorUpdateUseCase {

    constructor(private colaboradorRepository: ColaboradorRepository) { }

    async execute({ id, nome, email, idade, regime_contratacao, role }: Colaborador): Promise<ColaboradorUpdateUseCaseResponse> {
        const colaborador = await this.colaboradorRepository.update({
            id,
            nome,
            idade,
            email,
            role,
            regime_contratacao,      
        })
        return {
            colaborador
        }
    }
}