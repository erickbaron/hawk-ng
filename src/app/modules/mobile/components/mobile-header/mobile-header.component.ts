import { Component } from '@angular/core';
import { MobileMenuService } from '../../../../shared/services/mobile-menu.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { CartService } from '../../../../shared/services/cart.service';

@Component({
    selector: 'app-mobile-header',
    templateUrl: './mobile-header.component.html',
    styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent {
    constructor(
        public menu: MobileMenuService,
        public wishlist: WishlistService,
        public cart: CartService
    ) { }
}
