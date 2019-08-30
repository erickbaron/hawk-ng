import { Administrador } from './administrador';
import { Categoria } from './categoria';
import { AvaliacaoProduto } from './avaliacao-produto';


export class Produto {
    id: number;
    nome: string;
    valor_custo: number;
    promocao: boolean;
    valor_venda: number;
    descricao: string;
    peso: number;
    altura: number;
    largura: number;
    comprimento: number;
    registro_ativo: boolean;
    administrador: Administrador;
    categoria: Categoria;
    avaliacao_produto: AvaliacaoProduto;
}