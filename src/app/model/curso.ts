import { EntidadeBase } from './base/entidadeBase';

export class Curso extends EntidadeBase {

    public descricao!: string;
    public dtInicio!: Date;
    public dtFim!: Date;
    public qtdAlunos!: number;
    public codCategoria!: number;

}