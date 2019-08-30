import { Empresa } from './empresa';
import { Compra } from './compra';


export class Financa {
    id: number;
    valor_custo: number;
    valor_venda: number;
    valor_lucro: number;
    registro_ativo: boolean;
    empresa: Empresa;
    compra: Compra;
}