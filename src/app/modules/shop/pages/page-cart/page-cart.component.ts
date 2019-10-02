import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../../../services/cart.service';
import { FormControl, Validators } from '@angular/forms';
import { CartItem } from '../../../../shared/interfaces/cart-item';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { RootService } from '../../../../../services/root.service';
import { Carrinho } from 'src/models/carrinho';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/services/carrinho.service';
import { ItemCompra } from 'src/models/item-compra';
import { ItemCompraService } from 'src/services/item-compra.service';


interface Item {
    cartItem: ItemCompra;
    quantity: number;
    quantidade: FormControl;
}

@Component({
    selector: 'app-cart',
    templateUrl: './page-cart.component.html',
    styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject();

    returnUrl: string;

    removedItems: ItemCompra[] = [];
    items: ItemCompra[] = [];
    updating = false;

    constructor(
        public root: RootService,
        public cart: CartService,
        public service: ItemCompraService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.returnUrl = '/carrinho'
this.service.obterTodos().subscribe(x => {
    this.items = x;
})
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
    
    remove(item: ItemCompra): void {
        if (this.removedItems.includes(item)) {
            return;
        }

        this.removedItems.push(item);
        this.service.apagar(item.id).subscribe({ complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item) });
    }

    update(item: ItemCompra): void {
        this.updating = true;
        this.service.alterar(item.id).subscribe({ complete: () => this.updating = false });
    }
}
