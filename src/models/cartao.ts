import { Cliente } from './cliente';


export class Cartao {
    id: number;
    numero_cartao: string;
    vencimento_cartao: string;
    nome_cartao: string;
    cvc_cartao: number;
    registro_ativo: boolean;
    cliente: Cliente;
}