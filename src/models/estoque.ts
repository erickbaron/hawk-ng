import { Empresa } from './empresa';
import { Produto } from './produto';


export class Estoque {
    id: number;
    quantidade: number;
    tipo: boolean;
    dataEntrada: string;
    registroAtivo: boolean;
    empresa: Empresa;
    produto: Produto;
}