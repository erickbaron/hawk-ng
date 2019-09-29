import { AvaliacaoEmpresa } from './avaliacao-empresa';


export class Empresa {
    id: number;
    nomeEmpresa: string;
    cnpj: string;
    celular: string;
    cep: string;
    logradouro: string;
    complemento: string;
    numero: string;
    ramo: string;
    registroAtivo: boolean;
    cidade: string;
    avalicao_empresa: AvaliacaoEmpresa;
}