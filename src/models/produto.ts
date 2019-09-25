import { Administrador } from './administrador';
import { Categoria } from './categoria';
import { AvaliacaoProduto } from './avaliacao-produto';
import { Empresa } from './empresa';


export class Produto {
    id: number;
    nome: string;
    valorCusto: number;
    promocao: boolean;
    valorVenda: number;
    descricao: string;
    peso: number;
    altura: number;
    largura: number;
    comprimento: number;
    nomeArquivo: string; 
    nomeHash: string;
    registroAtivo: boolean;
    categoria: Categoria;
    empresaId: Empresa;
}