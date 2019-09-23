import { Component } from '@angular/core';
import { Order } from '../../../../shared/interfaces/order';
import { orders } from '../../../../../data/account-orders';
import { address } from '../../../../shared/interfaces/address';
import { addresses } from '../../../../../data/account-addresses';

@Component({
    selector: 'app-page-dashboard',
    templateUrl: './page-dashboard.component.html',
    styleUrls: ['./page-dashboard.component.sass']
})
export class PageDashboardComponent {
    address: address = addresses[0];
    orders: Order[] = orders.slice(0, 3);

    constructor() { }
}
