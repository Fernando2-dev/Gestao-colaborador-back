import { AreaAtuacaoColaborador, Colaborador, ColaboradorProjeto, Prisma, ProjetoTecnologia } from "@prisma/client";

export interface ITecnologiaProjeto {
    tecnologia_id: number;
    projeto_id: number;
}[]

export interface ITecnologiaProjetoDelete {
    tecnologia_id: number;
    projeto_id: number;
}[]
export interface ProjetoTecnologiaRepository {
    create(data: ITecnologiaProjeto): Promise<ProjetoTecnologia[]>
    deleteMany(data: ITecnologiaProjetoDelete[] | ITecnologiaProjetoDelete): Promise<void>
}