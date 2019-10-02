import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../interfaces/product';
import { WishlistService } from '../../../../services/wishlist.service';
import { CompareService } from '../../../../services/compare.service';
import { QuickviewService } from '../../../../services/quickview.service';
import { RootService } from '../../../../services/root.service';
import { CurrencyService } from '../../../../services/currency.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ItemCompraService } from 'src/services/item-compra.service';
import { ItemCompra } from 'src/models/item-compra';
import { Produto } from 'src/models/produto';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject();

    @Input() product: Produto;
    @Input() layout: 'grid-sm' | 'grid-nl' | 'grid-lg' | 'list' | 'horizontal' | null = null;

    addingToCart = false;
    addingToWishlist = false;
    addingToCompare = false;
    showingQuickview = false;

    constructor(
        private cd: ChangeDetectorRef,
        public root: RootService,
        public cart: CartService,
        public wishlist: WishlistService,
        public compare: CompareService,
        public quickview: QuickviewService,
        public currency: CurrencyService,
        private serviceItemCompra: ItemCompraService,
        private toastr: ToastrService

    ) { }

    imagemAltura = 250;
    imagemMargem = 2;
    ngOnInit(): void {
        this.currency.changes$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cd.markForCheck();
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }



    addToCart(): void {
        if (!this.addingToCart && this.product) {
            this.addingToCart = true;

            // this.cart.add(this.product, this.quantity.value).subscribe({complete: () => this.addingToCart = false});
            let itemCompra = new ItemCompra();
            itemCompra.compraId = 0;
            itemCompra.produtoId = this.product.id;
            itemCompra.valorItem = this.product.valorVenda;
            itemCompra.quantidade = 1;
            this.serviceItemCompra.adicionar(itemCompra).subscribe(x => {
                this.toastr.success("Registro Inserido!")            })
        }
    }

    
    
}
