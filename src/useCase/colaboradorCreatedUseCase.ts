import { ColaboradorRepository } from "@/repositories/interfaces/colaborador-repository";
import { Colaborador, Prisma } from "@prisma/client";
import { EmailExistente } from "./error/emailExistente";



interface ColaboradorCreatedUseCaseResponse {
    colaborador: Colaborador
}

export class ColaboradorCreatedUseCase {

    constructor(private colaboradorRepository: ColaboradorRepository) { }

    async execute({ nome, email, areaAtuacao, idade, regimeContratacao, senha }: Prisma.ColaboradorCreateInput): Promise<ColaboradorCreatedUseCaseResponse> {
        const verificadorEmail = await this.colaboradorRepository.findByEmail(email);
        
        if (!verificadorEmail) {
            throw new EmailExistente()
        }
        
        const colaborador = await this.colaboradorRepository.create({
            nome,
            idade,
            email,
            senha,
            regimeContratacao,
            areaAtuacao
        })

        return {
            colaborador
        }
    }
}