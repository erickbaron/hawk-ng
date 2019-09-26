import { Cliente } from './cliente';


export class Cartao {
    id: number;
    numero: string;
    dataVencimento: string;
    nomeProprietario: string;
    cvc: number;
    registroAtivo: boolean;
    clienteId: Cliente;
}