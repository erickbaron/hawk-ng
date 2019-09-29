import { Compra } from './compra';
import { Produto } from './produto';


export class ItemCompra {
    id: number;
    valorItem: number;
    registroAtivo: boolean;
    produto: Produto;
    compra: Compra;
}