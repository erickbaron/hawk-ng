import { Cliente } from './cliente';
import { Produto } from './produto';


export class ProdutoFavorito {
    id: number
    registro_ativo: boolean;
    cliente: Cliente;
    produto: Produto;
}