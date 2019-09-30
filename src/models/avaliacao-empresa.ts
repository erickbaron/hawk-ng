import { Cliente } from './cliente';


export class AvaliacaoEmpresa {
    id: number;
    comentarioEmpresa: string;
    notaEmpresa: number;
    registroAtivo: boolean;
    cliente: Cliente;
}