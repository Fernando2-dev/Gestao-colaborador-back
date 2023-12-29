import {  ColaboradorRepository, IColaborador } from "@/repositories/interfaces/colaborador-repository";
import { NotFound } from "./error/notFound";



interface ColaboradorUpdateUseCaseResponse {
    colaborador: IColaborador
}

export class ColaboradorUpdateUseCase {

    constructor(private colaboradorRepository: ColaboradorRepository) { }

    async execute({ id, nome, email, idade, regime_contratacao, role }: IColaborador): Promise<ColaboradorUpdateUseCaseResponse> {
        // const colaboradorId = this.colaboradorRepository.findById(id)
        
        // if(!colaboradorId){
        //     throw new NotFound("Id do colaborador, não encontrado")
        // }
       
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