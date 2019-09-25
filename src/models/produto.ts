import { Administrador } from './administrador';
import { Categoria } from './categoria';
import { AvaliacaoProduto } from './avaliacao-produto';


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
    registroAtivo: boolean;
    administrador: Administrador;
    categoria: Categoria;
    avaliacaoProduto: AvaliacaoProduto;
}