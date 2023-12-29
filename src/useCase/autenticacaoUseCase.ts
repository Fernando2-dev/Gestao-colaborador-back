import { ColaboradorRepository } from "@/repositories/interfaces/colaborador-repository";
import { EmailSenhaAutenticacao } from "./error/emailAutenticacaoSenha";
import { compare } from "bcryptjs";
import { Colaborador } from "@prisma/client";

interface AutenticacaoRequest {
    email: string;
    senha: string;
}

interface AutenticacaoResponse {
    colaborador: Colaborador;
}

export class AutenticacaoUseCase {
    constructor(private useAutenticacaoRepository: ColaboradorRepository) {}

    async execute({ email, senha }: AutenticacaoRequest): Promise<AutenticacaoResponse> {
        const colaborador = await this.useAutenticacaoRepository.findByEmail(email);

        if (!colaborador) {
            throw new EmailSenhaAutenticacao();
        }
        const compararSenhaColaborador = await compare(senha, colaborador.senha);
        console.log('Comparar Senha:', compararSenhaColaborador);
        if (!compararSenhaColaborador) {
            throw new EmailSenhaAutenticacao();
        }
    
        return {
            colaborador,
        };
    }
}
