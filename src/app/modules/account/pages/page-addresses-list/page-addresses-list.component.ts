import { Component } from '@angular/core';
import { address } from '../../../../shared/interfaces/address';
import { addresses } from '../../../../../data/account-addresses';

@Component({
    selector: 'app-page-addresses-list',
    templateUrl: './page-addresses-list.component.html',
    styleUrls: ['./page-addresses-list.component.sass']
})
export class PageenderecosListComponent {
    addresses: address[] = addresses;

    constructor() { }
}
