import { Component, Input } from '@angular/core';
import { CartService } from '../../../../../services/cart.service';
import { WishlistService } from '../../../../../services/wishlist.service';
import { RootService } from '../../../../../services/root.service';

@Component({
    selector: 'app-header-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    @Input() departments = false;
    @Input() logo = false;
    @Input() search = false;

    constructor(
        public root: RootService,
        public cart: CartService,
        public wishlist: WishlistService
    ) { }
}
