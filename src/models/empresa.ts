import { Cidade } from './cidade';
import { AvaliacaoEmpresa } from './avaliacao-empresa';


export class Empresa {
    id: number;
    nome_empresa: string;
    cnpj: string;
    celular: string;
    cep: string;
    logradouro: string;
    complemento: string;
    numero: string;
    ramo: string;
    registro_ativo: boolean;
    cidade: Cidade;
    avalicao_empresa: AvaliacaoEmpresa;
}