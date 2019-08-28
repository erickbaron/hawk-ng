import { Compra } from './compra';
import { Produto } from './produto';


export class ItemCompra {
    id: number;
    valor_item: number;
    registro_ativo: boolean;
    produto: Produto;
    compra: Compra;
}