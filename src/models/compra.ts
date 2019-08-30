import { Cliente } from './cliente';
import { Administrador } from './administrador';
import { Cartao } from './cartao';


export class Compra {
    id: number;
    valor_total: number;
    valor_desconto: number;
    registro_ativo: boolean;
    cliente: Cliente;
    administrador: Administrador;
    cartao: Cartao;
}