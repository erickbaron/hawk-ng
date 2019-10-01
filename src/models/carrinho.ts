import { Cliente } from './cliente';
import { Usuario } from './usuario';


export class Carrinho {
    id: number;
    valorTotal: number;
    dataVencimento: string;
    registroAtivo: boolean;
    usuarioId: Usuario;
    itensCompra: Cliente;
}