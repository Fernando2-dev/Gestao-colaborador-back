import { ColaboradorRepository } from "@/repositories/interfaces/colaborador-repository";
import { Colaborador, Prisma } from "@prisma/client";
import { EmailExistente } from "./error/emailExistente";
import { hash } from "bcryptjs";



interface ColaboradorCreatedUseCaseResponse {
    colaborador: Colaborador
}

export class ColaboradorCreatedUseCase {

    constructor(private colaboradorRepository: ColaboradorRepository) { }

    async execute({ nome, email, idade, regime_contratacao, senha }: Prisma.ColaboradorCreateInput): Promise<ColaboradorCreatedUseCaseResponse> {
        const password_hash = await hash(senha, 6)
        const verificadorEmail = await this.colaboradorRepository.findByEmail(email);
        
        if (verificadorEmail) {
            throw new EmailExistente()
        }
        
        const colaborador = await this.colaboradorRepository.create({
            nome,
            idade,
            email,
            senha: password_hash,
            regime_contratacao,
        })
        return {
            colaborador
        }
    }
}