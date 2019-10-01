import { Cliente } from './cliente';
import { Administrador } from './administrador';
import { Cartao } from './cartao';


export class Compra {
    id: number;
    valorTotal: number;
    valorDesconto: number;
    registroAtivo: boolean;
    clienteId: Cliente;

}