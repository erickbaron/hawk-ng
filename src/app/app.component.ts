import { AfterViewInit, Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './shared/services/cart.service';
import { CompareService } from './shared/services/compare.service';
import { WishlistService } from './shared/services/wishlist.service';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { CurrencyService } from './shared/services/currency.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private router: Router,
        private toastr: ToastrService,
        private cart: CartService,
        private compare: CompareService,
        private wishlist: WishlistService,
        private zone: NgZone,
        private scroller: ViewportScroller,
        private currency: CurrencyService
    ) {}

    ngOnInit(): void {
        // properties of the CurrencyFormatOptions interface fully complies
        // with the arguments of the built-in pipe "currency"
        // https://angular.io/api/common/CurrencyPipe
        this.currency.options = {
            code: 'USD',
            // display: 'symbol',
            // digitsInfo: '1.2-2',
            // locale: 'en-US'
        };

        this.router.events.subscribe((event) => {
            if ((event instanceof NavigationEnd)) {
                this.scroller.scrollToPosition([0, 0]);
            }
        });
        this.cart.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to cart!`);
        });
        this.compare.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to compare!`);
        });
        this.wishlist.onAdding$.subscribe(product => {
            this.toastr.success(`Product "${product.name}" added to wish list!`);
        });
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    const preloader = document.querySelector('.site-preloader');

                    preloader.addEventListener('transitionend', (event: TransitionEvent) => {
                        if (event.propertyName === 'opacity') {
                            preloader.remove();
                        }
                    });
                    preloader.classList.add('site-preloader__fade');
                }, 300);
            });
        }
    }
}
