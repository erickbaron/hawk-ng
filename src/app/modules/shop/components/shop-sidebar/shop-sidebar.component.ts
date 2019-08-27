import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductFilter } from '../../../../shared/interfaces/product-filter';
import { Product } from '../../../../shared/interfaces/product';
import { products } from '../../../../../data/shop-products';
import { ShopSidebarService } from '../../services/shop-sidebar.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fromMatchMedia } from '../../../../shared/functions/rxjs/fromMatchMedia';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-shop-sidebar',
    templateUrl: './shop-sidebar.component.html',
    styleUrls: ['./shop-sidebar.component.sass']
})
export class ShopSidebarComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject();

    @Input() filters: ProductFilter[] = [];
    @Input() offcanvas: 'always'|'mobile' = 'mobile';

    products: Product[] = products;
    isOpen = false;

    constructor(
        public sidebar: ShopSidebarService,
        @Inject(PLATFORM_ID)
        private platformId: any
    ) { }

    ngOnInit(): void {
        this.sidebar.isOpen$.pipe(takeUntil(this.destroy$)).subscribe(isOpen => {
            if (isOpen) {
                this.open();
            } else {
                this.close();
            }
        });

        if (isPlatformBrowser(this.platformId)) {
            fromMatchMedia('(max-width: 991px)').pipe(takeUntil(this.destroy$)).subscribe(media => {
                if (this.offcanvas === 'mobile' && this.isOpen && !media.matches) {
                    this.close();
                }
            });
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private open(): void {
        if (isPlatformBrowser(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;

            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
        }

        this.isOpen = true;
    }

    private close(): void {
        if (isPlatformBrowser(this.platformId)) {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
        }

        this.isOpen = false;
    }
}
