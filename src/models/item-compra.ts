import { FormControl } from '@angular/forms';
import { Produto } from './produto';

export class ItemCompra {
    id: number;
    valorItem: number;
    quantidade: number;
    registroAtivo: boolean;
    produtoId: number;
    produto: Produto;
    compraId: number;

}