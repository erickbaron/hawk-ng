import { Cliente } from './cliente';


export class AvaliacaoProduto {
    id: number;
    comentarioProduto: string;
    notaProduto: number;
    registroAtivo: boolean;
    cliente: Cliente;
}